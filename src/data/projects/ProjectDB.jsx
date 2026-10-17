import { CiGlobe } from "react-icons/ci";

/**
 * Central catalog of the websites this portfolio showcases.
 *
 * Add a new site in three places:
 *   1. here (the card data),
 *   2. in ProjectIndex.jsx (the sidebar entry),
 *   3. in NavData.jsx subMenu (the route).
 * `idkey` ties all three together — it must be unique and match everywhere.
 *
 * Screenshot is optional: when missing, the site page embeds the live site in
 * an iframe instead of a static image.
 */
const ProjectDB = [
    {
        title: "AI Lead Hunter",
        preLink: "/projects",
        link: "http://127.0.0.1:8080",
        idkey: 201,
        img: null, // live iframe preview is used when img is null
        overviewtitile: "Описание",
        feauturetitile: "Возможности",
        advantagestitile: "Результат",
        overview: "Сервис для поиска клиентов, которым нужен сайт: выбираешь категорию бизнеса (рестораны, стоматологии, автосалоны) и город, а система выдаёт лиды с контактами, ссылкой на 2GIS и готовым текстом предложения. Есть веб-версия и Telegram-бот.",
        feautures: `Поиск по 2GIS API
                    12 категорий бизнеса
                    Проверка сайтов клиентов
                    Готовый текст оффера
                    Telegram-бот
                    Экспорт в CSV`,
        advantages: `Экономит часы ручного поиска
                    Целевые лиды, без воды
                    Текст для рассылки сразу готов
                    Без повторов: бот помнит, кому уже писал`,
        site: "Открыть",
        siteicon: <CiGlobe />,
    },
];

export default ProjectDB;
