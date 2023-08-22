export type CardType = {
    id: number | string
    title: string
    imgRef: string
    years?: YearsType
}

export type VariantType = 'video' | 'girl' | 'competition'

export type YearsType = '2010_2011' | '2012_2013'