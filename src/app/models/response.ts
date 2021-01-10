export interface ApiResponse {
    homePage: string,
    content: TemplateContent[]
}

export interface TemplateContent {
    appearance: string,
    content?: TemplateContent[];
    props: any
}