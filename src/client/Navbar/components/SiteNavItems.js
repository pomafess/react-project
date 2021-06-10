import {v4} from 'uuid'

export default [
    {
        page: "Главная",
        to: "/",
        id: `${v4()}`
    },
    {
        page: "Планирование",
        to: "/planing",
        id: `${v4()}`
    },
    {
        page: "Награды",
        to: "/awards",
        id: `${v4()}`
    }
]