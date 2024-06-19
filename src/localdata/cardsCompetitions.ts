import {CardType} from "../common/types"
import maslenitsa_2016 from "../img/competitions/thumb/maslenitsa-2016.jpg"
import tournament_2013 from "../img/competitions/thumb/tournament-2013.jpg"
import tournament_2014 from "../img/competitions/thumb/tournament-2014.jpg"
import grappling_2014 from "../img/competitions/thumb/grappling-2014.jpg"
import Elena_Vasilyeva_vs_Kara_Teller from '../img/competitions/thumb/Elena_Vasilyeva_vs_Kara_Teller.jpg'
import Kara_Teller_vs_Svetlana_Solovyova from '../img/competitions/thumb/Kara_Teller_vs_Svetlana_Solovyova.jpg'
import KaraTellervsDariaBalina from '../img/competitions/thumb/KaraTellervsDariaBalina.jpg'
import VarvaravsTais from '../img/competitions/thumb/VarvaravsTais.jpg'
import video_20 from '../img/competitions/thumb/video-20.jpg'
import video_4 from '../img/competitions/thumb/video-4.jpg'
import video_8 from '../img/competitions/thumb/video-8.jpg'
import alex_elena_2011 from '../img/competitions/thumb/2011-alex-elena.jpg'
import izida_tais_2008 from '../img/competitions/thumb/2008-izida-tais.jpg'
import izida_irina_2008 from '../img/competitions/thumb/2008-izida-irina.jpg'
import irina_tais_2009 from '../img/competitions/thumb/2009-irina-tais.jpg'
import natalia_alex_2010 from '../img/competitions/thumb/2010-natalia-alex.jpg'

export const cardsCompetitions2015_2017: Array<CardType> = [
    {
        id: 'maslenitsa-2016',
        title: 'Female power competitions for\nthe Maslenitsa week, 2015-2017',
        imgRef: maslenitsa_2016,
        years: '2015_2017'
    },
]

export const cardsCompetitions2013_2014: Array<CardType> = [
    {
        id: 'tournament-2013',
        title: 'Women\'s Power Event\n Tournament. October 2013',
        imgRef: tournament_2013,
        years: "2013_2014",
    },
    {
        id: 'tournament-2014',
        title: 'Wrestling tournament for\nbeginners. May, 2014',
        imgRef: tournament_2014,
        years: "2013_2014",
    },
    {
        id: 'grappling-2014',
        title: 'Tournament for the prize of the\nNamazon Club. October, 2014',
        imgRef: grappling_2014,
        years: "2013_2014",
    },
]

const cardsCompetitions2012Data : Array<CardType> = [
    {
        id: 'christmas-2012',
        title: 'Christmas Cup 2012\nMMA fights',
        imgRef: Elena_Vasilyeva_vs_Kara_Teller,
    },
    {
        id: 'mma-2012',
        title: 'ММА. Kara Teller vs\nSvetlana Solovyova. 2012',
        imgRef: Kara_Teller_vs_Svetlana_Solovyova,
    },
    {
        id: 'sportHoliday-2012',
        title: 'MMA fights in the May\nholidays. 2012',
        imgRef: KaraTellervsDariaBalina,
    },
    {
        id: 'varvara-tais-2012',
        title: 'Varvara Akulova vs Tais.\nSubmission grappling. 2012',
        imgRef: VarvaravsTais,
    },
    {
        id: 'nevskaya-arena-2012',
        title: 'The first Nevsky Arena. MMA\n tournament. 2012',
        imgRef: video_20,
    },
]

// Add 'years: 2012' to each object in the array
export const cardsCompetitions2012: Array<CardType> = cardsCompetitions2012Data.map(card => ({
    ...card,
    years: '2012',
}));

export const cardsCompetitions2011Data: Array<CardType> = [
    {
        id: 'christmas-2011',
        title: 'Christmas Cup 2011 Submission Grappling',
        imgRef: video_4,
    },
    {
        id: 'beach-2011',
        title: 'Beach tournament\nSubmission Grappling. 2011',
        imgRef: video_8,
    },
    {
        id: 'beach-mix-2011',
        title: 'Mixed beach tournament\nSubmission Grappling. 2011',
        imgRef: alex_elena_2011,
    },
]

// Add 'years: 2011' to each object in the array
export const cardsCompetitions2011: Array<CardType> = cardsCompetitions2011Data.map(card => ({
    ...card,
    years: '2011',
}));

export const cardsArchiveData: Array<CardType> = [
    {
        id: 'IzidaVsTais2008',
        title: 'Izida vs Tais\nWrestling. 2008',
        imgRef: izida_tais_2008,
    },
    {
        id: 'IzidaVsIrina2008',
        title: 'Izida vs Irina\nWrestling. 2008',
        imgRef: izida_irina_2008,
    },
    {
        id: 'IrinaVsTais2009',
        title: 'Irina vs Tais\nBeach wrestling. 2009',
        imgRef: irina_tais_2009,
    },
    {
        id: 'beach-mix-2010',
        title: 'Mixed beach\ntournament. 2010',
        imgRef: natalia_alex_2010,
    },
]

// Add 'years: Archive' to each object in the array
export const cardsArchive: Array<CardType> = cardsArchiveData.map(card => ({
    ...card,
    years: 'Archive',
}));