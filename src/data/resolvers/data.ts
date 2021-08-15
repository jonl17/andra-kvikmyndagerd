export interface MenuInterface {
  links: {
    url: string
    label: string
  }[]
}

export const menuResolver = (node: any): MenuInterface => ({
  links: node.data.links.map((l: any) => ({
    url: l.link.url,
    label: l.label,
  })),
})
