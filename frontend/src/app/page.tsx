import componentResolver from './utils/component-resolver';
import {getPageBySlug} from "@/app/utils/get-page-by-slug";

// https://docs.strapi.io/dev-docs/api/rest/guides/understanding-populate
export default async function RootRoute() {
  try {
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
    const page = await getPageBySlug('home', "ko", populate)
    if (page.error && page.error.status == 401)
      throw new Error(
        'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
      )
    if (page.data.length === 0) return null

    const contentSections = page.data[0].contentSections
    return contentSections.map((section: any, index: number) =>
      componentResolver(section, index)
    )
  } catch (error: any) {
    window.alert('Missing or invalid credentials')
  }
}
