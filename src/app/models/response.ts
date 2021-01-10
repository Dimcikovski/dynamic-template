export interface ApiResponse {
    homePage: string,
    content: TemplateContent[]
}

export interface TemplateContent {
    apperance: string,
    content?: TemplateContent[];
    props: any
}