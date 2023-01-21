export type Section = {
    id: string
    // name: string
    description?: string
    related_tags: string[]
}
  
export const sections: Section[] = [
    {
        id: 'ai-ml',  // same as name of the section
        description: 'TBA',
        related_tags: [
            'ai-ml',
            'ai',
            'ml',
        ],
    },
    {
        id: 'general',
        description: 'TBA',
        related_tags: [
            'art',
            'education',
            'music',
        ],
    },
    {
        id: 'math',
        description: 'TBA',
        related_tags: [
            'math',
        ],
    },
    {
        id: 'python',
        description: 'TBA',
        related_tags: [
            'python',
            'pybind11',
            'c++'
        ],
    },
]