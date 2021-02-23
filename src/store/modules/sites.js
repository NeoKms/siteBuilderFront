const axios = require('axios');
const template2 = {
    id: 2,
    type: 1,
    name: 'Сайт школы',
    active: 1,
    img: "https://static10.tgstat.ru/channels/_0/e7/e7bf72a2d6081ba3f5a2e0b86606aa6b.jpg",
    style: [
        {
            name: 'Основные настройки шаблона',
            elements: [
                {
                    type: 'selectSimple',
                    name: 'Цветовая схема',
                    data: {
                        label: 'Цветовая схема',
                        value: '1',
                        image: 'https://images.unian.net/photos/2019_04/1556182748-8199.jpg?0.7433681880971192',
                        options: [
                            {
                                value: '1',
                                label: 'Светлая №1',
                                image: 'https://images.unian.net/photos/2019_04/1556182748-8199.jpg?0.7433681880971192',
                                colors: [
                                    '#FFBF43',
                                    '#4690D5',
                                    '#204A71',
                                    '#F6F8FB',
                                    '#FFFFFF',
                                    '#2E3945',
                                ],
                            },
                            {
                                value: '2',
                                label: 'Светлая',
                                image: 'https://img.povar.ru/main/3d/bb/7f/7a/shashlik_iz_semgi_na_mangale-394128.jpg',
                                colors: [
                                    '#23322A',
                                    '#587364',
                                    '#EF4D23',
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'selectSimple',
                    name: 'Шрифт',
                    data: {
                        label: 'Шрифт',
                        value: '1',
                        url: '',
                        options: [
                            {
                                value: '1',
                                label: 'Rubik',
                                url: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap',
                            },
                            {
                                value: '2',
                                label: 'Open Sans',
                                url: 'www.leningrad.spb.ru',
                            },
                            {
                                value: '3',
                                label: 'Lobster',
                                url: 'www.leningrad.spb.ru',
                            },
                        ],
                    },
                },
                {
                    type: 'radioImage',
                    name: 'Цвет подложек',
                    data: {
                        label: 'Цвет подложек',
                        value: '1',
                        options: [],

                    },
                    options: [
                        {
                            value: '1',
                            html: `
                                        <div class="substrate-1">
                                             <div class="substrate-1__wrap">
                                                <div class="substrate-1__color1"></div>
                                                <div class="substrate-1__color2"></div>
                                             </div>
                                        </div>
                                        <style>
                                            .substrate-1{
                                                width: 42px;
                                                height: 42px;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                            }
                                            .substrate-1__wrap {
                                                width: 36px;
                                                height: 36px;
                                                border-radius: 50%;
                                                overflow: hidden;
                                                display: flex;
                                                align-items: center;
                                            }
                                            .substrate-1__color1{
                                                flex-basis: 50%;
                                                height: 100%;
                                                background-color: #2946C6;
                                            }
                                             .substrate-1__color2{
                                                flex-basis: 50%;
                                                height: 100%;
                                                background-color: #324057;
                                            }
                                        </style>
                                        `,
                            scheme: ['1'],
                        },
                        {
                            value: '2',
                            html: `
                                        <div class="substrate-2">
                                             <div class="substrate-2__wrap">
                                                <div class="substrate-2__color1"></div>
                                                <div class="substrate-2__color2"></div>
                                             </div>
                                        </div>
                                        <style>
                                            .substrate-2{
                                                width: 42px;
                                                height: 42px;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                            }
                                            .substrate-2__wrap {
                                                width: 36px;
                                                height: 36px;
                                                border-radius: 50%;
                                                overflow: hidden;
                                                display: flex;
                                                align-items: center;
                                            }
                                            .substrate-2__color1{
                                                flex-basis: 50%;
                                                height: 100%;
                                                background-color: #99A5D8;
                                            }
                                             .substrate-2__color2{
                                                flex-basis: 50%;
                                                height: 100%;
                                                background-color: #D3D5DD;
                                            }
                                        </style>
                                        `,
                            scheme: ['1'],
                        },
                        {
                            value: '3',
                            html: `
                                         <div class="substrate-3">
                                             <div class="substrate-3__wrap">
                                                <div class="substrate-3__color1"></div>
                                                <div class="substrate-3__color2"></div>
                                             </div>
                                        </div>
                                        <style>
                                            .substrate-3{
                                                width: 42px;
                                                height: 42px;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                            }
                                            .substrate-3__wrap {
                                                width: 36px;
                                                height: 36px;
                                                border-radius: 50%;
                                                overflow: hidden;
                                                display: flex;
                                                align-items: center;
                                                border: 1px solid #C4C4C4;
                                            }
                                            .substrate-3__color1{
                                                flex-basis: 50%;
                                                height: 100%;
                                                background-color: #FFFFFF;
                                            }
                                             .substrate-3__color2{
                                                flex-basis: 50%;
                                                height: 100%;
                                                background-color: #324057;
                                            }
                                        </style>
                                        `,
                            scheme: ['1', '2'],
                        },
                        {
                            value: '4',
                            html: `
                                         <div class="substrate-4">
                                             <div class="substrate-4__wrap">
                                                <div class="substrate-4__color1"></div>
                                                <div class="substrate-4__color2"></div>
                                             </div>
                                        </div>
                                        <style>
                                            .substrate-4{
                                                width: 42px;
                                                height: 42px;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                            }
                                            .substrate-4__wrap {
                                                width: 36px;
                                                height: 36px;
                                                border-radius: 50%;
                                                border: 1px solid #C4C4C4;
                                                overflow: hidden;
                                                display: flex;
                                                align-items: center;
                                            }
                                            .substrate-4__color1{
                                                flex-basis: 50%;
                                                height: 100%;
                                                background-color: #FFFFFF;
                                            }
                                             .substrate-4__color2{
                                                flex-basis: 50%;
                                                height: 100%;
                                                background-color: #626B74;
                                            }
                                        </style>
                                        `,
                            scheme: ['2'],
                        },
                    ],
                },
                {
                    type: "radioImage",
                    name: 'Формы',
                    data: {
                        label: 'Формы',
                        value: '1',
                        options: [
                            {
                                value: '1',
                                html: `  <div class="form-1">
                                             <div class="form-1__wrap">
                                             </div>
                                        </div>
                                         <style>
                                            .form-1{
                                                width: 60px;
                                                height: 42px;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                            }
                                            .form-1__wrap {
                                                width: 50px;
                                                height: 32px;
                                                background: #F6F8FB;
                                                border: 1px solid #D3D5DD;
                                            }
                                        </style>
                                    `,
                            },
                            {
                                value: '2',
                                html: `  <div class="form-2">
                                             <div class="form-2__wrap">
                                             </div>
                                        </div>
                                         <style>
                                            .form-2{
                                                width: 68px;
                                                height: 42px;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                            }
                                            .form-2__wrap {
                                                width: 58px;
                                                height: 32px;
                                                background: #F6F8FB;
                                                border: 1px solid #D3D5DD;
                                                border-radius: 10px;
                                            }
                                        </style>
                                    `,
                            },
                            {
                                value: '3',
                                html: `  <div class="form-3">
                                             <div class="form-3__wrap">
                                             </div>
                                        </div>
                                         <style>
                                            .form-3{
                                                width: 68px;
                                                height: 42px;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                            }
                                            .form-3__wrap {
                                                width: 58px;
                                                height: 32px;
                                                background: #F6F8FB;
                                                border: 1px solid #D3D5DD;
                                                border-radius: 20px;
                                            }
                                        </style>
                                    `,
                            },
                        ],
                    },
                },
            ],
        },
    ],
    pages: [
        {
            name: 'Главная',
            code: 'Main',
            require: true,
            active: true,
            blockList: [
                {
                    id: '1',
                    name: 'Блок 1',
                    order: 1,
                    reorder: false,
                    elements: [
                        {
                            type: 'textAreaImage',
                            name: 'Главный банер',
                            active: true,
                            require: true,
                            col: 12,
                            data: {
                                col: 8,
                                label: 'Главный банер',
                                img: 'https://jrgreez.ru/examples/books-1163695_1920.jpg',
                                size: {
                                    width: '418',
                                    height: '122',
                                },
                                direction: 'row',
                                include: [
                                    {
                                        type: 'inputSimple',
                                        value: '',
                                        label: 'Заголовок',
                                        placeholder: 'Заголовок',
                                    },
                                    {
                                        type: 'inputSimple',
                                        value: '',
                                        label: 'Стоимость',
                                        placeholder: 'Стоимость',
                                    },
                                ],
                                note: 'Изображение на баннер',
                            },
                        },
                        {
                            type: 'textAreaImage',
                            name: 'Акционный баннер',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Акционный баннер',
                                img: 'https://jrgreez.ru/examples/books-2158737_1920.jpg',
                                size: {
                                    width: '422',
                                    height: '89',
                                },
                                direction: 'row',
                                include: [
                                    {
                                        type: 'checkboxSimple',
                                        name: 'Тип',
                                        row: true,
                                        options: [
                                            {
                                                active: true,
                                                label: 'Ссылка на страницу с акциями',
                                            },
                                        ],
                                    },
                                    {
                                        type: 'inputSimple',
                                        value: '',
                                        label: 'Промо код',
                                        placeholder: 'Промо код',
                                        col: 12,
                                    },
                                ],
                                note: 'Изображение на акционный баннер',
                            },
                        },
                    ],
                },
                {
                    id: '2',
                    name: 'Блок 2',
                    order: 2,
                    reorder: true,
                    elements: [
                        {
                            type: 'textAreaSimple',
                            name: 'О нас',
                            active: true,
                            col: 12,
                            require: false,
                            data: {
                                value: '',
                                col: 24,
                                placeholder: 'Текст',
                                label: 'О нас',
                                rows: '5',
                            },
                        },
                        {
                            type: 'blockTextareaImage',
                            name: 'Галерея фото',
                            active: true,
                            require: true,
                            col: 12,
                            data: {
                                label: 'Галерея фото',
                                direction: 'row',
                                btnType: 'addPhoto',
                                btnText: 'Загрузить из фотобанка',
                                col: 4,
                                height: '141',
                                example: {
                                    img: '',
                                    col: 12,
                                    size: {
                                        height: '141',
                                    },
                                    direction: 'col',
                                },
                                block: [
                                    {
                                        col: 12,
                                        img: 'https://jrgreez.ru/examples/architecture-1643585_1920.jpg',
                                        size: {
                                            height: '141',
                                        },
                                        direction: 'col',
                                    },
                                    {
                                        col: 12,
                                        img: 'https://jrgreez.ru/examples/architecture-1643585_1920.jpg',
                                        size: {
                                            height: '141',
                                        },
                                        direction: 'col',
                                    },
                                    {
                                        col: 12,
                                        img: 'https://jrgreez.ru/examples/architecture-1643585_1920.jpg',
                                        size: {
                                            height: '141',
                                        },
                                        direction: 'col',
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    id: '3',
                    name: 'Блок 3',
                    order: 3,
                    reorder: true,
                    elements: [
                        {
                            type: 'selectMultiple',
                            name: 'Преимущества',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Преимущества',
                                value: ['1', '2', '3'],
                                options: [
                                    {
                                        value: '1',
                                        label: 'Комфортные условия',
                                    },
                                    {
                                        value: '2',
                                        label: 'Высокие потолки',
                                    },
                                    {
                                        value: '3',
                                        label: 'Доступ в интернет',
                                    },
                                    {
                                        value: '4',
                                        label: 'Доступность от метро',
                                    },
                                    {
                                        value: '5',
                                        label: 'Доступность от метро',
                                    },
                                    {
                                        value: '6',
                                        label: 'Доступность от метро',
                                    },
                                    {
                                        value: '7',
                                        label: 'Доступность от метро',
                                    },
                                    {
                                        value: '8',
                                        label: 'Доступность от метро',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'selectSimple',
                            name: 'Публикации на главной',
                            active: true,
                            require: false,
                            col: 5,
                            data: {
                                label: 'Публикации на главной',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Публикации со скидкой',
                                    },
                                    {
                                        value: '2',
                                        label: 'Публикации без скидки',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'selectSimple',
                            name: 'Количество публикаций',
                            active: true,
                            require: false,
                            col: 2,
                            data: {
                                label: 'Количество',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: '4',
                                    },
                                    {
                                        value: '2',
                                        label: '8',
                                    },
                                    {
                                        value: '3',
                                        label: '16',
                                    },
                                    {
                                        value: '4',
                                        label: '24',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'SwitchSimple',
                            name: 'Показывать только с фото',
                            active: true,
                            require: false,
                            col: 5,
                            data: {
                                label: 'Показывать только с фото',
                                value: true
                            },
                        },
                    ],
                },
                {
                    id: '4',
                    name: 'Блок 4',
                    order: 4,
                    reorder: true,
                    elements: [
                        {
                            type: 'blockTextareaImage',
                            name: 'Видео',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Видео',
                                direction: 'row',
                                btnType: 'addVideo',
                                btnText: 'Загрузить из фотобанка',
                                col: 4,
                                height: '141',
                                example: {
                                    col: 12,
                                    img: '',
                                    size: {
                                        height: '141',
                                    },
                                    direction: 'col',
                                    include: [
                                        {
                                            type: 'inputSimple',
                                            value: '',
                                            placeholder: 'Заголовок',
                                        },
                                        {
                                            type: 'textAreaSimple',
                                            value: '',
                                            placeholder: 'Описание',
                                            rows: '5',
                                        },
                                    ],
                                },
                                block: [
                                    {
                                        col: 12,
                                        img: 'https://jrgreez.ru/examples/shopping-mall-1126485_1920.jpg',
                                        size: {
                                            height: '141',
                                        },
                                        direction: 'col',
                                        include: [
                                            {
                                                type: 'inputSimple',
                                                value: '',
                                                placeholder: 'Заголовок',
                                            },
                                            {
                                                type: 'textAreaSimple',
                                                value: '',
                                                placeholder: 'Описание',
                                                rows: '5',
                                            },
                                        ],
                                    },
                                    {
                                        col: 12,
                                        img: 'https://jrgreez.ru/examples/shopping-mall-1126485_1920.jpg',
                                        size: {
                                            height: '141',
                                        },
                                        direction: 'col',
                                        include: [
                                            {
                                                type: 'inputSimple',
                                                value: '',
                                                placeholder: 'Заголовок',
                                            },
                                            {
                                                type: 'textAreaSimple',
                                                value: '',
                                                placeholder: 'Описание',
                                                rows: '5',
                                            },
                                        ],
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    id: '5',
                    name: 'Блок 5',
                    order: 5,
                    reorder: true,
                    elements: [
                        {
                            type: 'blockTextareaImage',
                            name: 'Отзывы',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Отзывы',
                                direction: 'row',
                                btnType: 'secondary',
                                btnText: 'Добавить отзыв',
                                col: 4,
                                height: '141',
                                example: {
                                    col: 12,
                                    img: 'https://e7.pngegg.com/pngimages/550/169/png-clipart-user-profile-computer-icons-user-interface-female-symbol-miscellaneous-purple.png',
                                    size: {
                                        width: '114',
                                        height: '114',
                                    },
                                    direction: 'col',
                                    mask: true,
                                    include: [
                                        {
                                            type: 'textAreaSimple',
                                            value: '',
                                            placeholder: 'Описание',
                                            rows: '5',
                                        },
                                    ],
                                },
                                block: [
                                    {
                                        col: 12,
                                        img: 'https://e7.pngegg.com/pngimages/550/169/png-clipart-user-profile-computer-icons-user-interface-female-symbol-miscellaneous-purple.png',
                                        size: {
                                            width: '114',
                                            height: '114',
                                        },
                                        direction: 'col',
                                        mask: true,
                                        include: [
                                            {
                                                type: 'textAreaSimple',
                                                value: '',
                                                placeholder: 'Описание',
                                                rows: '5',
                                            },
                                        ],
                                    },
                                    {
                                        col: 12,
                                        img: 'https://e7.pngegg.com/pngimages/550/169/png-clipart-user-profile-computer-icons-user-interface-female-symbol-miscellaneous-purple.png',
                                        size: {
                                            width: '114',
                                            height: '114',
                                        },
                                        direction: 'col',
                                        mask: true,
                                        include: [
                                            {
                                                type: 'textAreaSimple',
                                                value: '',
                                                placeholder: 'Описание',
                                                rows: '5',
                                            },
                                        ],
                                    },
                                    {
                                        col: 12,
                                        img: 'https://e7.pngegg.com/pngimages/550/169/png-clipart-user-profile-computer-icons-user-interface-female-symbol-miscellaneous-purple.png',
                                        size: {
                                            width: '114',
                                            height: '114',
                                        },
                                        direction: 'col',
                                        mask: true,
                                        include: [
                                            {
                                                type: 'textAreaSimple',
                                                value: '',
                                                placeholder: 'Описание',
                                                rows: '5',
                                            },
                                        ],
                                    }
                                ],
                            },
                        },
                    ],
                },
                {
                    id: '6',
                    name: 'Блок 6',
                    order: 6,
                    reorder: true,
                    elements: [
                        {
                            type: 'inputSimple',
                            name: 'Заголовок',
                            active: true,
                            require: true,
                            col: 12,
                            data: {
                                label: 'Заголовок формы',
                                value: '',
                            },
                        },
                        {
                            type: 'selectSimple',
                            name: 'Тип',
                            active: true,
                            require: false,
                            col: 6,
                            data: {
                                label: 'Тип формы обратной связи',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Стандартная',
                                    },
                                    {
                                        value: '2',
                                        label: 'Формальная',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'selectSimple',
                            name: 'Фон',
                            active: true,
                            require: false,
                            col: 6,
                            data: {
                                label: 'Фон',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Без фона',
                                    },
                                    {
                                        value: '2',
                                        label: 'С фоном',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'checkboxSimple',
                            name: 'Данные',
                            active: true,
                            require: false,
                            col: 6,
                            data: {
                                row: true,
                                label: 'Данные формы обратной связи',
                                options: [
                                    {
                                        active: true,
                                        label: 'Ваше имя',
                                    },
                                    {
                                        active: true,
                                        label: 'Телефон',
                                    },
                                    {
                                        active: true,
                                        label: 'E-mail',
                                    },
                                    {
                                        active: true,
                                        label: 'Город',
                                    },
                                    {
                                        active: true,
                                        label: 'Название организации',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'imageBox',
                            name: 'Фото блока',
                            active: true,
                            require: false,
                            col: 6,
                            data: {
                                label: 'Фото блока обратной связи',
                                size: {
                                    width: '310',
                                    height: '140',
                                },
                                img: 'https://jrgreez.ru/examples/typewriter-801921_1920.jpg',
                                note: 'Изображение на фон',
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: 'Информация',
            code: 'Info',
            require: false,
            active: true,
            blockList: [
                {
                    id: '1',
                    name: 'Блок 1',
                    order: 1,
                    reorder: false,
                    elements: [
                        {
                            type: 'blockTextareaImage',
                            name: 'О нас',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'О нас',
                                direction: 'col',
                                col: 4,
                                height: '141',
                                block: [
                                    {
                                        col: 12,
                                        img: 'https://jrgreez.ru/examples/coins-1726618_1920.jpg',
                                        size: {
                                            width: '200',
                                            height: '114',
                                        },
                                        direction: 'row',
                                        note: 'Фото блока',
                                        include: [
                                            {
                                                type: 'inputSimple',
                                                value: '',
                                                label: 'Заголовок',
                                                placeholder: 'Заголовок',
                                                col: 12,
                                            },
                                            {
                                                type: 'textAreaSimple',
                                                value: '',
                                                placeholder: 'Описание',
                                                rows: '5',
                                                col: 12,
                                            },
                                        ],
                                    },
                                    {
                                        col: 12,
                                        img: 'https://jrgreez.ru/examples/coins-1726618_1920.jpg',
                                        size: {
                                            width: '200',
                                            height: '114',
                                        },
                                        direction: 'row',
                                        note: 'Фото блока',
                                        include: [
                                            {
                                                col: 12,
                                                type: 'inputSimple',
                                                value: '',
                                                label: 'Заголовок',
                                                placeholder: 'Заголовок',
                                            },
                                            {
                                                col: 12,
                                                type: 'textAreaSimple',
                                                value: '',
                                                placeholder: 'Описание',
                                                rows: '5',
                                            },
                                        ],
                                    },
                                    {
                                        col: 12,
                                        img: 'https://jrgreez.ru/examples/coins-1726618_1920.jpg',
                                        size: {
                                            width: '200',
                                            height: '114',
                                        },
                                        direction: 'row',
                                        note: 'Фото блока',
                                        include: [
                                            {
                                                col: 12,
                                                type: 'inputSimple',
                                                value: '',
                                                label: 'Заголовок',
                                                placeholder: 'Заголовок',
                                            },
                                            {
                                                col: 12,
                                                type: 'textAreaSimple',
                                                value: '',
                                                placeholder: 'Описание',
                                                rows: '5',
                                            },
                                        ],
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    id: '2',
                    name: 'Блок 2',
                    order: 2,
                    reorder: true,
                    elements: [
                        {
                            type: 'inputSimple',
                            name: 'Заголовок',
                            active: true,
                            require: true,
                            col: 12,
                            data: {
                                label: 'Заголовок формы',
                                value: '',
                            },
                        },
                        {
                            type: 'selectSimple',
                            name: 'Тип',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Тип формы обратной связи',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Стандартная',
                                    },
                                    {
                                        value: '2',
                                        label: 'Толерантная',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'selectSimple',
                            name: 'Фон',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Фон',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Без фона',
                                    },
                                    {
                                        value: '2',
                                        label: 'С фоном',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'checkboxSimple',
                            name: 'Данные',
                            active: true,
                            require: false,
                            col: 24,
                            data: {
                                row: true,
                                label: 'Данные формы обратной связи',
                                options: [
                                    {
                                        active: true,
                                        label: 'Ваше имя',
                                    },
                                    {
                                        active: true,
                                        label: 'Телефон',
                                    },
                                    {
                                        active: true,
                                        label: 'E-mail',
                                    },
                                    {
                                        active: true,
                                        label: 'Город',
                                    },
                                    {
                                        active: true,
                                        label: 'Название организации',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'imageBox',
                            name: 'Фото блока',
                            active: true,
                            require: false,
                            col: 24,
                            data: {
                                size: {
                                    width: '310',
                                    height: '140',
                                },
                                img: 'https://jrgreez.ru/examples/typewriter-801921_1920.jpg',
                                note: 'Фото блока обратной связи',
                            },
                        },
                    ],
                },
                {
                    id: '3',
                    name: 'Блок 3',
                    order: 3,
                    reorder: true,
                    elements: [
                        {
                            type: 'textAreaTitle',
                            name: 'История',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                title: "НЕМНОГО НАШЕЙ ИСТОРИИ",
                                label: "История",
                                value: "У бизнес-центра развитая инфраструктура: кафе, рестораны, заправочная станция, продуктовые магазины. Удобное транспортное сообщение, как для пешеходов, так и для автомобилистов. Неподалеку от бизнес-центра находится остановка общественного транспорта, а всего в 12 минутах ходьбы - станция метро “Чёрная Речка“?У бизнес-центра развитая инфраструктура: кафе, рестораны, заправочная станция, продуктовые магазины. Удобное транспортное сообщение, как для пешеходов, так и для автомобилистов. Неподалеку от бизнес-центра находится остановка общественного транспорта, а всего в 12 минутах ходьбы - станция метро “Чёрная Речка“.",
                                rows: "5",
                                placeholder: "Описание",
                                length: "1500"
                            }
                        },
                    ],
                },
            ],
        },
        {
            name: 'Акции',
            code: 'Actions',
            require: false,
            active: true,
            blockList: [
                {
                    id: '1',
                    name: 'Блок 1',
                    order: 1,
                    reorder: false,
                    elements: [
                        {
                            type: 'blockTextareaImage',
                            name: 'Описание акций',
                            active: true,
                            require: true,
                            col: 12,
                            data: {
                                label: 'Описание акций',
                                direction: 'col',
                                col: 4,
                                btnType: 'secondary',
                                btnText: 'Добавить акцию',
                                example: {
                                    col: 12,
                                    img: '',
                                    size: {
                                        width: '210',
                                        height: '114',
                                    },
                                    direction: 'row',
                                    note: 'Фото блока',
                                    include: [
                                        {
                                            type: 'inputSimple',
                                            value: '',
                                            label: 'Заголовок',
                                            placeholder: 'Заголовок',
                                            col: 12,
                                        },
                                        {
                                            type: 'dataPickerSimple',
                                            value: '',
                                            label: 'Дата',
                                            col: 12,
                                            placeholder: 'Выберите период',
                                        },
                                        {
                                            type: 'textAreaSimple',
                                            value: '',
                                            placeholder: 'Описание',
                                            rows: '5',
                                            col: 12,
                                        },
                                    ],
                                },
                                block: [
                                    {
                                        img: 'https://jrgreez.ru/examples/beverages-3105631_1920.jpg',
                                        size: {
                                            width: '210',
                                            height: '114',
                                        },
                                        direction: 'row',
                                        note: 'Фото блока',
                                        include: [
                                            {
                                                type: 'inputSimple',
                                                value: '',
                                                label: 'Заголовок',
                                                placeholder: 'Заголовок',
                                                col: 12,
                                            },
                                            {
                                                type: 'dataPickerSimple',
                                                value: '',
                                                label: 'Дата',
                                                col: 12,
                                                placeholder: 'Выберите период',
                                            },
                                            {
                                                type: 'textAreaSimple',
                                                value: '',
                                                placeholder: 'Описание',
                                                rows: '5',
                                                col: 12,
                                            },
                                        ],
                                        col: 12,
                                    },
                                    {
                                        img: 'https://jrgreez.ru/examples/beverages-3105631_1920.jpg',
                                        size: {
                                            width: '210',
                                            height: '114',
                                        },
                                        direction: 'row',
                                        note: 'Фото блока',
                                        include: [
                                            {
                                                type: 'inputSimple',
                                                value: '',
                                                label: 'Заголовок',
                                                placeholder: 'Заголовок',
                                                col: 12,
                                            },
                                            {
                                                type: 'dataPickerSimple',
                                                value: '',
                                                label: 'Дата',
                                                col: 12,
                                                placeholder: 'Выберите период',
                                            },
                                            {
                                                type: 'textAreaSimple',
                                                value: '',
                                                placeholder: 'Описание',
                                                rows: '5',
                                                col: 12,
                                            },
                                        ],
                                        col: 12,
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    id: '2',
                    name: 'Блок 2',
                    order: 2,
                    reorder: true,
                    elements: [
                        {
                            type: 'selectSimple',
                            name: 'Тип',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Тип формы обратной связи',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Стандартная',
                                    },
                                    {
                                        value: '2',
                                        label: 'Толерантная',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'selectSimple',
                            name: 'Фон',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Фон',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Без фона',
                                    },
                                    {
                                        value: '2',
                                        label: 'С фоном',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'checkboxSimple',
                            name: 'Данные',
                            active: true,
                            require: false,
                            col: 24,
                            data: {
                                row: true,
                                label: 'Данные формы обратной связи',
                                options: [
                                    {
                                        active: true,
                                        label: 'Ваше имя',
                                    },
                                    {
                                        active: true,
                                        label: 'Телефон',
                                    },
                                    {
                                        active: true,
                                        label: 'E-mail',
                                    },
                                    {
                                        active: true,
                                        label: 'Город',
                                    },
                                    {
                                        active: true,
                                        label: 'Название организации',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'imageBox',
                            name: 'Фото блока',
                            active: true,
                            require: false,
                            col: 24,
                            data: {
                                size: {
                                    width: '310',
                                    height: '140',
                                },
                                img: 'https://s15.stc.all.kpcdn.net/share/i/12/10427446/inx960x640.jpg',
                                note: 'Фото блока обратной связи',
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: 'Публикации',
            require: true,
            code: 'Publications',
            active: true,
            blockList: [
                {
                    id: '1',
                    name: 'Блок 1',
                    order: 1,
                    reorder: true,
                    elements: [
                        {
                            type: 'selectSimple',
                            name: 'Порядок публикации',
                            active: true,
                            require: true,
                            col: 12,
                            data: {
                                label: 'Порядок публикации',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Отображать публикации со скидкой',
                                    },
                                    {
                                        value: '2',
                                        label: 'Отображать публикации без скидки',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'selectSimple',
                            name: 'Колличество на странице',
                            active: true,
                            require: true,
                            col: 12,
                            data: {
                                label: 'Колличество на странице',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: '12',
                                    },
                                    {
                                        value: '2',
                                        label: '24',
                                    },
                                    {
                                        value: '3',
                                        label: '48',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'radioImage',
                            name: 'Вид',
                            active: true,
                            require: true,
                            col: 24,
                            data: {
                                label: 'Вид',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        html: `
                                        <div class="kind-1">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <style>
                                            .kind-1{
                                                width: 100px;
                                                height: 60px;
                                                padding: 6px 8px;
                                                display: flex;
                                                flex-wrap: wrap;
                                                justify-content: space-between;
                                                align-items: center;
                                            }
                                            .kind-1 div {
                                                width: 30%;
                                                height: 12px;
                                                background-color: #C4C4C4;
                                            }
                                        </style>
                                        `,
                                    },
                                    {
                                        value: '2',
                                        html: `
                                        <div class="kind-2">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <style>
                                            .kind-2{
                                                width: 100px;
                                                height: 60px;
                                                padding: 6px 8px;
                                                display: flex;
                                                flex-wrap: wrap;
                                                justify-content: space-between;
                                                align-items: center;
                                            }
                                            .kind-2 div {
                                                width: 22%;
                                                height: 12px;
                                                background-color: #C4C4C4;
                                            }
                                        </style>
                                        `,
                                    },
                                    {
                                        value: '3',
                                        html: `
                                        <div class="kind-3">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <style>
                                            .kind-3{
                                                width: 100px;
                                                height: 80px;
                                                padding: 6px 8px;
                                                display: flex;
                                                flex-wrap: wrap;
                                                justify-content: space-between;
                                                align-items: center;
                                            }
                                            .kind-3 div {
                                                width: 48%;
                                                height: 20px;
                                                background-color: #C4C4C4;
                                            }
                                        </style>
                                        `,
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    id: '2',
                    name: 'Блок 2',
                    order: 2,
                    reorder: true,
                    elements: [
                        {
                            type: 'selectSimple',
                            name: 'Тип',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Тип формы обратной связи',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Стандартная',
                                    },
                                    {
                                        value: '2',
                                        label: 'Толерантная',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'selectSimple',
                            name: 'Фон',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Фон',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Без фона',
                                    },
                                    {
                                        value: '2',
                                        label: 'С фоном',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'checkboxSimple',
                            name: 'Данные',
                            active: true,
                            require: false,
                            col: 24,
                            data: {
                                row: true,
                                label: 'Данные формы обратной связи',
                                options: [
                                    {
                                        active: true,
                                        label: 'Ваше имя',
                                    },
                                    {
                                        active: true,
                                        label: 'Телефон',
                                    },
                                    {
                                        active: true,
                                        label: 'E-mail',
                                    },
                                    {
                                        active: true,
                                        label: 'Город',
                                    },
                                    {
                                        active: true,
                                        label: 'Название организации',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'imageBox',
                            name: 'Фото блока',
                            active: true,
                            require: false,
                            col: 24,
                            data: {
                                size: {
                                    width: '310',
                                    height: '140',
                                },
                                img: 'https://s15.stc.all.kpcdn.net/share/i/12/10427446/inx960x640.jpg',
                                note: 'Фото блока обратной связи',
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: 'Страница объекта',
            require: true,
            code: 'Detail',
            active: true,
            blockList: [
                {
                    id: '1',
                    name: 'Блок 1',
                    order: 1,
                    reorder: false,
                    elements: [
                        {
                            name: 'Публикация',
                            active: true,
                            require: true,
                        },
                    ],
                },
                {
                    id: '2',
                    name: 'Блок 2',
                    order: 2,
                    reorder: true,
                    elements: [
                        {
                            type: 'selectSimple',
                            name: 'Порядок публикации',
                            active: true,
                            require: true,
                            col: 12,
                            data: {
                                label: 'Порядок публикации',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Отображать публикации со скидкой',
                                    },
                                    {
                                        value: '2',
                                        label: 'Отображать публикации без скидки',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'selectSimple',
                            name: 'Колличество на странице',
                            active: true,
                            require: true,
                            col: 12,
                            data: {
                                label: 'Колличество на странице',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: '12',
                                    },
                                    {
                                        value: '2',
                                        label: '24',
                                    },
                                    {
                                        value: '3',
                                        label: '48',
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    id: '3',
                    name: 'Блок 3',
                    order: 3,
                    reorder: true,
                    elements: [
                        {
                            type: 'selectSimple',
                            name: 'Тип',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Тип формы обратной связи',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Стандартная',
                                    },
                                    {
                                        value: '2',
                                        label: 'Толерантная',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'selectSimple',
                            name: 'Фон',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Фон',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Без фона',
                                    },
                                    {
                                        value: '2',
                                        label: 'С фоном',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'checkboxSimple',
                            name: 'Настройки подбора',
                            active: true,
                            require: false,
                            col: 24,
                            data: {
                                row: true,
                                label: 'Настройки подбора',
                                options: [
                                    {
                                        active: true,
                                        label: 'Площадь',
                                    },
                                    {
                                        active: true,
                                        label: 'Цена',
                                    },
                                    {
                                        active: true,
                                        label: 'Дополнительные опции',
                                    },
                                    {
                                        active: true,
                                        label: 'Электричество',
                                    },
                                    {
                                        active: true,
                                        label: 'Температура',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'checkboxSimple',
                            name: 'Данные формы обратной связи',
                            active: true,
                            require: false,
                            col: 24,
                            data: {
                                row: true,
                                label: 'Данные формы обратной связи',
                                options: [
                                    {
                                        active: true,
                                        label: 'Ваше имя',
                                    },
                                    {
                                        active: true,
                                        label: 'Телефон',
                                    },
                                    {
                                        active: true,
                                        label: 'E-mail',
                                    },
                                    {
                                        active: true,
                                        label: 'Город',
                                    },
                                    {
                                        active: true,
                                        label: 'Название организации',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'imageBox',
                            name: 'Фото блока',
                            active: true,
                            require: false,
                            col: 24,
                            data: {
                                size: {
                                    width: '310',
                                    height: '140',
                                },
                                img: 'https://s15.stc.all.kpcdn.net/share/i/12/10427446/inx960x640.jpg',
                                note: 'Фото блока обратной связи',
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: 'Контакты',
            require: true,
            code: 'Contacts',
            active: true,
            blockList: [
                {
                    id: '1',
                    name: 'Блок 1',
                    order: 1,
                    reorder: false,
                    elements: [
                        {
                            name: 'Контакты',
                            active: true,
                            require: true,
                        },
                        {
                            name: 'Карта',
                            active: true,
                            require: true,
                        },
                    ],
                },
                {
                    id: '2',
                    name: 'Блок 2',
                    order: 2,
                    reorder: true,
                    elements: [
                        {
                            type: 'imageBox',
                            name: 'Баннер',
                            active: true,
                            require: false,
                            col: 24,
                            data: {
                                size: {
                                    width: '411',
                                    height: '114',
                                },
                                img: 'https://s15.stc.all.kpcdn.net/share/i/12/10427446/inx960x640.jpg',
                                note: 'Изображение на баннер',
                            },
                        },
                        {
                            type: 'selectSimple',
                            name: 'Тип',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Тип формы обратной связи',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Стандартная',
                                    },
                                    {
                                        value: '2',
                                        label: 'Толерантная',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'selectSimple',
                            name: 'Фон',
                            active: true,
                            require: false,
                            col: 12,
                            data: {
                                label: 'Фон',
                                value: '1',
                                options: [
                                    {
                                        value: '1',
                                        label: 'Без фона',
                                    },
                                    {
                                        value: '2',
                                        label: 'С фоном',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'checkboxSimple',
                            name: 'Данные',
                            active: true,
                            require: false,
                            col: 24,
                            data: {
                                row: true,
                                label: 'Данные формы обратной связи',
                                options: [
                                    {
                                        active: true,
                                        label: 'Ваше имя',
                                    },
                                    {
                                        active: true,
                                        label: 'Телефон',
                                    },
                                    {
                                        active: true,
                                        label: 'E-mail',
                                    },
                                    {
                                        active: true,
                                        label: 'Город',
                                    },
                                    {
                                        active: true,
                                        label: 'Название организации',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'imageBox',
                            name: 'Фото блока',
                            active: true,
                            require: false,
                            col: 24,
                            data: {
                                size: {
                                    width: '310',
                                    height: '140',
                                },
                                img: 'https://s15.stc.all.kpcdn.net/share/i/12/10427446/inx960x640.jpg',
                                note: 'Фото блока обратной связи',
                            },
                        },
                    ],
                },
                {
                    id: '3',
                    name: 'Блок 3',
                    order: 3,
                    reorder: true,
                    elements: [
                        {
                            type: 'textAreaTitle',
                            name: 'История',
                            active: true,
                            require: false,
                            col: 24,
                            data: {
                                title: '',
                                label: 'История',
                                value: '',
                                rows: '5',
                                placeholder: 'Описание',
                                maxLength: '250',
                            },
                        },
                    ],
                },
            ],
        },
    ]
};
export default {
    namespaced: true,
    state: {
        siteList: [],
        sitesDataList: [],
        templatesList: [],
        imageDataList: [],
    },
    getters: {
        getSiteList(state) {
            return state.siteList;
        },
        getSiteById: state => id => {
            return state.sitesDataList.find(siteData => Number(siteData.id) === Number(id));
        },
        getSiteByIdInd: state => id => {
            return state.sitesDataList.findIndex(siteData => Number(siteData.id) === Number(id));
        },
        getSiteDataList(state) {
            return state.sitesDataList;
        },
        getTemplatesList(state) {
            return state.templatesList;
        },
        getTemplatById: state => id => {
            return state.templatesList.find(template => Number(template.id) === Number(id));
        },
        getImageList(state) {
            return state.imageDataList;
        },
    },
    mutations: {
        getSiteList(state) {
            state.siteList = [
                {
                    id: 1,
                    type: {
                        options: [
                            {value: 1, label: 'Сайт', code: 'site'},
                            {value: 2, label: 'Лендинг', code: 'landing'},
                            {value: 3, label: 'Промо-сайт', code: 'promoSite'},
                        ],
                        value: 1
                    },
                    name: 'site1',
                    active: 1,
                    address: 'vlad.dev.lan',
                    img: "https://www.vkpress.ru/upload/iblock/56b/56b5d2504d707f50989bc1677e0fce38.png",
                },
                {
                    id: 2,
                    type: {
                        options: [
                            {value: 1, label: 'Сайт', code: 'site'},
                            {value: 2, label: 'Лендинг', code: 'landing'},
                            {value: 3, label: 'Промо-сайт', code: 'promoSite'},
                        ],
                        value: 2
                    },
                    name: 'site2',
                    active: 0,
                    address: 'vlad2.dev.lan',
                    // img: "https://99px.ru/sstorage/56/2019/07/image_562207191850033055418.jpg",
                },
            ];
        },
        getSiteById(state, payload) {
            //типо ответ от апи
            let data = [
                {
                    id: 1,
                    active: true,
                    address: "vlad.dev.lan",
                    description: "Описание",
                    name: "site1",
                    publications: [],
                    type: {
                        options: [
                            {value: 1, label: 'Сайт', code: 'site'},
                            {value: 2, label: 'Лендинг', code: 'landing'},
                            {value: 3, label: 'Промо-сайт', code: 'promoSite'},
                        ],
                        value: 1
                    },
                    contacts: {
                        "title": "названиеорг",
                        "phone": "телорг",
                        "city": "город",
                        "street": "улиц",
                        "house": "1",
                        "litera": "2",
                        "index": 333444,
                        "emailMain": "tmp1@gmila.com",
                        "emailFeedback": "tmp2@gmail.com",
                        "doubleMailing": "1",
                        "coordinate": {"x": "59.9558742615268", "y": "30.369708388251336"}
                    },
                    template: {
                        id: 0,
                        data: {}
                    },
                },
                {
                    id: 2,
                    active: false,
                    address: "vlad2.dev.lan",
                    description: "Описание",
                    name: "site2",
                    publications: [],
                    type: {
                        options: [
                            {value: 1, label: 'Сайт', code: 'site'},
                            {value: 2, label: 'Лендинг', code: 'landing'},
                            {value: 3, label: 'Промо-сайт', code: 'promoSite'},
                        ],
                        value: 2
                    },
                    contacts: {
                        "title": "названиеорг1",
                        "phone": "телорг1",
                        "city": "город1",
                        "street": "улиц1",
                        "house": "2",
                        "litera": "3",
                        "index": 111111,
                        "emailMain": "tmp1@gmila.com1",
                        "emailFeedback": "tmp2@gmail.com1",
                        "doubleMailing": "0",
                        "coordinate": {"x": "59.9558742615268", "y": "30.369708388251336"}
                    },
                    template: template2
                }
            ]
            //
            state.sitesDataList.push(data[payload.id - 1])
        },
        getTemplatesList(state) {
            //типо ответ от апи
            state.templatesList = [
                {
                    id: 1,
                    type: 1,
                    name: 'Сайт бц',
                    active: 1,
                    img: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/06/10/d9b97b5646fbb691e29947a921049a1d.jpg",
                    pages: template2.pages
                },
                {
                    id: 2,
                    type: 1,
                    name: 'Сайт школы',
                    active: 1,
                    img: "https://static10.tgstat.ru/channels/_0/e7/e7bf72a2d6081ba3f5a2e0b86606aa6b.jpg",
                    pages: template2.pages
                },
            ];
            //
        },
        setSiteData(state, payload) {
            let siteListElem = state.siteList.find(el => el.id === payload.data.id)
            if (siteListElem) {
                siteListElem.type = payload.data.type
                siteListElem.name = payload.data.name
                siteListElem.active = payload.data.active
                siteListElem.address = payload.data.address
            }
            state.sitesDataList[payload.ind] = payload.data
        },
        setImageList(state, data) {
            state.imageDataList = data;
        }
    },
    actions: {
        updateSiteData(context, payload) {
            if (context.getters.getSiteById(payload.id) !== undefined) {
                const ind = context.getters.getSiteByIdInd(payload.id)
                context.commit('setSiteData', {ind: ind, data: payload})
                return true
            } else {
                return false
            }
        },
        fetchSiteData(context, payload) {
            //запрашиваем от апи, если такого еще нет у нас
            if (context.getters.getSiteById(payload.id) === undefined) {
                context.commit('getSiteById', {id: payload.id})
            }
        },
        fetchTemplatesList(context) {
            if (context.getters.getTemplatesList.length === 0) {
                context.commit('getTemplatesList');
            }
        },
        fetchImageList(context) {
            return axios.get('https://jrgreez.ru/examples/listphoto.php')
                .then(res => {
                    if (res.data && res.data.message === 'ok') {
                        context.commit('setImageList', res.data.result)
                        return true
                    } else {
                        return false
                    }
                })
                .catch(err => {
                    console.error(err)
                    return false
                });
        },
    },
};
