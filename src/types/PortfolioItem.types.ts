import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface IPortfolioFrontmatterType {
	title: string
	type: string
	skills: {
		fe: string[]
		be: string[]
	}
	description: string[]
	thumbnail: {
		childImageSharp: {
			gatsbyImageData: IGatsbyImageData
		}
	}
}

export interface IPortfolioItemType {
	node: {
		id: string
		html: string
		fields: {
			slug: string
		}
		frontmatter: IPortfolioFrontmatterType
	}
}
