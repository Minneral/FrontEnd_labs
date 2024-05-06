export type VacancyType = {
    id: number,
    company: string,
    position: string,
    city: string,
    flags: string[],
    date: string,
    url: string,
    salary: [number, number],
    liked: boolean
}

export type VacancyCombinePropsType = {
    filter: any | undefined,
    isOnlyFavorite : boolean,
    vacancyList: VacancyType[],
    selectedVacancy: number,
}

export type StoreType = {
    vacancies: VacancyType[],
    selectedVacancy: number
}