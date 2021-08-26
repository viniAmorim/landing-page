export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type Image = {
  alternativeText: string
  url: string
}

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type SectionTechProps =  {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type socialLink = {
  title: string
  url: string
}

export type Author = {
  photo: Image
  name: string
  role: string
  socialLinks: socialLink[]
  description: String
}

export type SectionAboutUsProps = {
  title: string
  authors?: Author[]
}

export type Review = {
  name: string
  text: string
  photo: {
    url: string
  }
}

export type sectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutProjectProps
  sectionReviews: sectionReviewsProps
}

