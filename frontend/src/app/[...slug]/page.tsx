import {Metadata} from "next";
import {getPageBySlug} from "@/app/utils/get-page-by-slug";
import {FALLBACK_SEO} from "@/app/utils/constants";
import componentResolver from "../utils/component-resolver";


type Props = {
    params: {
        lang: string,
        slug: string
    }
}

const populate = {
    populate: "*",
    seo: {populate: "*"},
    contentSections: {
        on: {
            "sections.hero": {
                populate: "*"
            },
            "sections.features": {
                populate: "*"
            },
            "sections.pricing": {
                populate: {
                    plans: {
                        populate: {
                            product_features: "*"
                        }
                    }
                }
            },
            "sections.testimonials-group": {
                populate: {
                    testimonials: {
                        populate: {
                            picture: "*"
                        }
                    }
                }
            },
            "sections.lead-form": {
                populate: "*"
            },
        }
    }
}


export async function generateMetadata({params}: Props): Promise<Metadata> {
    const page = await getPageBySlug(params.slug, "ko", populate);

    if (!page.data[0]?.attributes?.seo) return FALLBACK_SEO;
    const metadata = page.data[0].seo

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription
    }
}


export default async function PageRoute({params}: Props) {

    const page = await getPageBySlug(params.slug, "ko", populate);
    if (page.data.length === 0) return null;
    const contentSections = page.data[0].contentSections;
    return contentSections.map((section: any, index: number) => componentResolver(section, index));
}
