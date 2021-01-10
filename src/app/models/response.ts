interface ApiResponse {
    homePage: string,
    content: TemplateContent[]
}

interface TemplateContent {
    apperance: string,
    content?: TemplateContent[];
    props: any
}