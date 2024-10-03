import type { Struct, Schema } from '@strapi/strapi';

export interface SharedVideoEmbed extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_embeds';
  info: {
    displayName: 'Video Embed';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    author: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    file: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionsTestimonialsGroup extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials_groups';
  info: {
    displayName: 'Testimonials group';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<'elements.testimonial', true>;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'Rich text';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface SectionsPricing extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    title: Schema.Attribute.String;
    plans: Schema.Attribute.Component<'elements.pricing-plan', true>;
  };
}

export interface SectionsLeadForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_lead_forms';
  info: {
    displayName: 'Lead form';
  };
  attributes: {
    title: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    submitButton: Schema.Attribute.Component<'links.button', false>;
    location: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface SectionsLargeVideo extends Struct.ComponentSchema {
  collectionName: 'components_sections_large_videos';
  info: {
    displayName: 'Large video';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    poster: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    picture: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    buttons: Schema.Attribute.Component<'links.button-link', true>;
  };
}

export interface SectionsHeading extends Struct.ComponentSchema {
  collectionName: 'components_sections_headings';
  info: {
    displayName: 'Heading';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
  };
}

export interface SectionsFeauresRowGroup extends Struct.ComponentSchema {
  collectionName: 'components_sections_feaures_row_groups';
  info: {
    displayName: 'Feaures row group';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'elements.feature', true>;
  };
}

export interface SectionsFeatureRowsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    name: 'FeatureRowsGroup';
    displayName: 'Feaures row group';
    icon: 'bars';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsFeatureColumnsGroup extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_columns_groups';
  info: {
    displayName: 'Feature columns group';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsBottomActions extends Struct.ComponentSchema {
  collectionName: 'components_sections_bottom_actions';
  info: {
    displayName: 'Bottom actions';
  };
  attributes: {
    title: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'links.button-link', true>;
    description: Schema.Attribute.Text;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    links: Schema.Attribute.Component<'links.link', true>;
    button: Schema.Attribute.Component<'links.button-link', false>;
    navbarLogo: Schema.Attribute.Component<'layout.logo', false>;
  };
}

export interface LayoutLogo extends Struct.ComponentSchema {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    logoImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    logoText: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    footerLogo: Schema.Attribute.Component<'layout.logo', false>;
    menuLinks: Schema.Attribute.Component<'links.link', true>;
    legalLinks: Schema.Attribute.Component<'links.link', true>;
    socialLinks: Schema.Attribute.Component<'links.social-link', true>;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface MetaMetadata extends Struct.ComponentSchema {
  collectionName: 'components_meta_metadata';
  info: {
    displayName: 'Metadata';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LinksSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    social: Schema.Attribute.Enumeration<
      ['YOUTUBE', 'TWITTER', 'DISCORD', 'WEBSITE']
    >;
  };
}

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksButton extends Struct.ComponentSchema {
  collectionName: 'components_links_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_links_button_links';
  info: {
    displayName: 'Button link';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    picture: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    authorName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsPricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_plans';
  info: {
    displayName: 'Pricing plan';
  };
  attributes: {
    name: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    isRecommended: Schema.Attribute.Boolean;
    price: Schema.Attribute.Decimal;
    pricePeriod: Schema.Attribute.String;
    product_features: Schema.Attribute.Relation<
      'oneToMany',
      'api::product-feature.product-feature'
    >;
  };
}

export interface ElementsPlan extends Struct.ComponentSchema {
  collectionName: 'components_elements_plans';
  info: {
    name: 'plan';
    displayName: 'Pricing plan';
    icon: 'search-dollar';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    isRecommended: Schema.Attribute.Boolean;
    price: Schema.Attribute.Decimal;
    pricePeriod: Schema.Attribute.String;
    product_features: Schema.Attribute.Relation<
      'oneToMany',
      'api::product-feature.product-feature'
    >;
  };
}

export interface ElementsNotificationBanner extends Struct.ComponentSchema {
  collectionName: 'components_elements_notification_banners';
  info: {
    displayName: 'Notification banner';
    description: '';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['alert', 'info', 'warning']> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'links.link', false>;
  };
}

export interface ElementsLogos extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logos';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_sections';
  info: {
    displayName: 'Footer section';
  };
  attributes: {
    title: Schema.Attribute.String;
    links: Schema.Attribute.Component<'links.link', true>;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    showLink: Schema.Attribute.Boolean;
    newTab: Schema.Attribute.Boolean;
    url: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsFeatureRow extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_rows';
  info: {
    displayName: 'Feature row';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.Component<'links.link', false>;
  };
}

export interface ElementsFeatureColumn extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_columns';
  info: {
    displayName: 'Feature column';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.video-embed': SharedVideoEmbed;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'sections.testimonials-group': SectionsTestimonialsGroup;
      'sections.rich-text': SectionsRichText;
      'sections.pricing': SectionsPricing;
      'sections.lead-form': SectionsLeadForm;
      'sections.large-video': SectionsLargeVideo;
      'sections.hero': SectionsHero;
      'sections.heading': SectionsHeading;
      'sections.feaures-row-group': SectionsFeauresRowGroup;
      'sections.features': SectionsFeatures;
      'sections.feature-rows-group': SectionsFeatureRowsGroup;
      'sections.feature-columns-group': SectionsFeatureColumnsGroup;
      'sections.bottom-actions': SectionsBottomActions;
      'layout.navbar': LayoutNavbar;
      'layout.logo': LayoutLogo;
      'layout.footer': LayoutFooter;
      'meta.metadata': MetaMetadata;
      'links.social-link': LinksSocialLink;
      'links.link': LinksLink;
      'links.button': LinksButton;
      'links.button-link': LinksButtonLink;
      'elements.testimonial': ElementsTestimonial;
      'elements.pricing-plan': ElementsPricingPlan;
      'elements.plan': ElementsPlan;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.logos': ElementsLogos;
      'elements.footer-section': ElementsFooterSection;
      'elements.feature': ElementsFeature;
      'elements.feature-row': ElementsFeatureRow;
      'elements.feature-column': ElementsFeatureColumn;
    }
  }
}
