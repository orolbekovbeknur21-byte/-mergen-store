const SUPABASE_URL = 'https://nrnwbntzhvbqcmrwkrfy.supabase.co';
const SUPABASE_KEY = 'sb_publishable_uk6A6w4jodxnR13FSxdmHg_1eDqQyTu';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Products Database (Толук товарлар базасы)
const products = [
    {
        id: 1,
        title: "Вепрь-308 (ВПО-127) Карабин",
        category: "rifled",
        brand: "Калашников",
        caliber: ".308 Win",
        price: 125000,
        badge: "Атайын сунуш",
        image: "https://img.air-gun.ru/images/average/69893.webp",
        requiresLicense: true,
        description: "Тоолуу шарттарда кийик, теке жана каман уулоого ылайыкталган ишенимдүү сайлуу карабин. Бүктөлүүчү приклад жана Пикатинни планкасы бар.",
        specs: { "Калибр": ".308 Win (7.62x51)", "Ствол узундугу": "520 мм", "Ок баткыч": "10 ок", "Салмагы": "4.3 кг" }
    },
    {
        id: 2,
        title: "Benelli Argo E Comforttech",
        category: "rifled",
        brand: "Бенелли",
        caliber: ".308 Win",
        price: 285000,
        badge: "Премиум",
        image: "https://fieldsportsmalta.com/wp-content/uploads/2015/04/01_59-600x600.jpg",
        requiresLicense: true,
        description: "Италиялык белгилүү полуавтомат карабин. Артка тебүүнү азайтуучу Comforttech системасы менен жабдылган.",
        specs: { "Калибр": ".308 Win", "Өндүрүлгөн": "Италия", "Ствол": "Криогендик", "Салмагы": "3.25 кг" }
    },
    {
        id: 3,
        title: "Zastava M70 PS Карабин",
        category: "rifled",
        brand: "Застава",
        caliber: ".308 Win",
        price: 110000,
        badge: "Жаңылык",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZBIxFr76tmmGNwOPVknC9t-bB6Litm6bwZ6x8gtn7A&s=10",
        requiresLicense: true,
        description: "Сербияда өндүрүлгөн, Маузер системасындагы жогорку тактыктагы болтовый карабин. Пластик прикладу бышык жана тоо шарттарына туруктуу.",
        specs: { "Калибр": ".308 Win", "Ствол узундугу": "560 мм", "Ок баткыч": "5 ок", "Салмагы": "3.6 кг" }
    },
    {
        id: 4,
        title: "Сайга-12 ИСП.030 Жылмакай Курал",
        category: "smooth",
        brand: "Калашников",
        caliber: "12/76",
        price: 98000,
        badge: "Бестселлер",
        image: "https://img.ohotaktiv.ru/upload/iblock/72c/5qj2vh62mmlddcchyzt7gzupn6joq4ix.webp",
        requiresLicense: true,
        description: "12 калибрдеги тактикалык эң таанымал полуавтомат курал. Ылдам атуу жана өзүн коргоо, аңчылык үчүн идеалдуу.",
        specs: { "Калибр": "12/76 (12 Gauge)", "Патронник": "76 мм", "Ок баткыч": "8 ок", "Салмагы": "3.8 кг" }
    },
    {
        id: 5,
        title: "МР-27М ЭК Бос Чос 12 Калибр",
        category: "smooth",
        brand: "Байкал",
        caliber: "12/76",
        price: 52000,
        badge: "Классика",
        image: "https://12kalibr.com/wa-data/public/shop/products/26/88/8826/images/3353/3353.0x460@2x.jpg",
        requiresLicense: true,
        description: "Эки стволдуу вертикалка классикалык аңчылык куралы. Токойдо жана өрдөк уулоодо ишенимдүү өнөктөш.",
        specs: { "Калибр": "12/76", "Ствол узундугу": "725 мм", "Механизм": "Эжектор", "Материал": "Жангак жыгачы" }
    },
    {
        id: 6,
        title: "Benelli Super Black Eagle III",
        category: "smooth",
        brand: "Бенелли",
        caliber: "12/76",
        price: 310000,
        badge: "Премиум",
        image: "https://www.hobbi.gr/images/cached/700x700-karampina-benelli-super-black-eagle-3-ai-cerakote-fde-max-7--pr--55274.png",
        requiresLicense: true,
        description: "Суу канаттууларына аңчылык кылуу үчүн дүйнөдөгү эң мыкты полуавтоматтардын бири. Инерциялык система менен иштейт.",
        specs: { "Калибр": "12/89 Super Magnum", "Өндүрүлгөн": "Италия", "Ок баткыч": "4+1 ок", "Салмагы": "3.15 кг" }
    },
    {
        id: 7,
        title: "Патрон БПЗ 7.62x39 FMJ (20 даана)",
        category: "ammo",
        brand: "Байкал",
        caliber: "7.62x39",
        price: 2500,
        badge: "Запас бар",
        image: "https://img.ohotaktiv.ru/upload/iblock/a39/ixj1xibj0dueryx3zd6jftd8vcblu86i.webp",
        requiresLicense: true,
        description: "АК/СКS карабиндери үчүн оболочечный 7.62x39 калибрдеги патрондор. Машыгуу жана аңчылык үчүн.",
        specs: { "Ок салмагы": "8.0 грамм", "Ылдамдыгы": "775 м/с", "Таңгак": "20 даана" }
    },
    {
        id: 8,
        title: "Патрон БПЗ .308 Win SP (20 даана)",
        category: "ammo",
        brand: "Байкал",
        caliber: ".308 Win",
        price: 3800,
        badge: "Запас бар",
        image: "https://www.huntworld.ru/upload/iblock/435/patron_308win_bpz_sp_10_9_stal_latunir_1_20.jpeg",
        requiresLicense: true,
        description: "Полуоболочечный (SP) экспансивдүү ок. Чоң айбанаттарды (теке, каман, марал) уулоо үчүн жогорку токтотуучу күчкө ээ.",
        specs: { "Ок салмагы": "10.9 грамм", "Тиби": "SP (Soft Point)", "Таңгак": "20 даана" }
    },
    {
        id: 9,
        title: "Патрон Главпатрон 12/70 Дробь №3 (25 даана)",
        category: "ammo",
        brand: "Байкал",
        caliber: "12/76",
        price: 2200,
        badge: "Аңчылык",
        image: "https://hft.ru/upload/thumbs/source/productimage/image/silvershot1270utka-36_60617a83e72f3.jpg",
        requiresLicense: true,
        description: "Өрдөк, кеклик жана коён уулоого арналган 12 калибрдеги сапаттуу патрондор.",
        specs: { "Дробь номери": "№3 (3.5 мм)", "На навеска": "32 грамм", "Таңгак": "25 даана" }
    },
    {
        id: 10,
        title: "Vector Optics Continental 3-18x50 HD",
        category: "optics",
        brand: "Вектор",
        caliber: "Универсал",
        price: 48000,
        badge: "Оптика",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIvlkPvbn3TpicpfqSzdDhrMJ64bbFfiJLDvzg9oHmw&s=10",
        requiresLicense: false,
        description: "Алыс аралыкка атууга арналган немис айнеги бар профессионалдык оптический прицел. Ылайыктуу жарыктандыруучу торчо.",
        specs: { "Чоңойтуу": "3-18x", "Объектив": "50 мм", "Торчо": "Tactical VEC-T2", "Суу өтпөстүгү": "IPX6" }
    },
    {
        id: 11,
        title: "Коллиматордук Прицел Vector Optics Frenzy 1x22",
        category: "optics",
        brand: "Вектор",
        caliber: "Универсал",
        price: 14500,
        badge: "Хит",
        image: "https://vectoroptics.ru/image/cache/catalog/Products/Red-dots/01085/Vector-Optics-Frenzy-Plus-1x26x32QD-2-1000x1000.png",
        requiresLicense: false,
        description: "Жылмакай жана сайлуу куралдарга ылайыктуу чакан коллиматор. Жакын аралыкта ылдам мээлеп атууга арналган.",
        specs: { "Точка өлчөмү": "3 MOA", "Жарык деңгээли": "11 режим", "Батaрея": "CR2032", "Салмагы": "56 гр" }
    },
    {
        id: 12,
        title: "Тепловизордук Прицел Guide TS445",
        category: "optics",
        brand: "Вектор",
        caliber: "Универсал",
        price: 165000,
        badge: "Тепловизор",
        image: "https://www.pergam.ru/img/products/super/img_0369-edit.jpg",
        requiresLicense: false,
        description: "Түнкүсүн жана туманда аңчылык кылууга арналган жогорку тактыктагы тепловизор. Табылуу аралыгы 1800 метрге чейин.",
        specs: { "Матрица": "400x300", "Объектив": "45 мм", "Аралык": "1800 м", "Экран": "OLED" }
    },
    {
        id: 13,
        title: "МР-654К Макаров Пневматикалык Пистолет",
        category: "airgun",
        brand: "Байкал",
        caliber: "4.5 mm",
        price: 18500,
        badge: "Уруксатсыз",
        image: "https://basket-10.wbbasket.ru/vol1479/part147937/147937982/images/big/1.webp",
        requiresLicense: false,
        description: "Болоттон жасалган оригиналдуу Макаров пистолетинин толук көчүрмөсү. CO2 баллончиктери менен иштейт.",
        specs: { "Калибр": "4.5 мм BB", "Кубаттуулугу": "< 3 Дж", "Материал": "Курал болот", "Салмагы": "730 гр" }
    },
    {
        id: 14,
        title: "МР-512С Пневматикалык Винтовка",
        category: "airgun",
        brand: "Байкал",
        caliber: "4.5 mm",
        price: 12500,
        badge: "Машыгуу",
        image: "https://sniper.by/upload/iblock/26f/0bnk18619zy42wh6bbia943j25s4zrqm.jpg",
        requiresLicense: false,
        description: "Классикалык переломка пневматика винтовкасы. Атууну үйрөнүү жана көңүл ачуу үчүн эң жакшы тандоо.",
        specs: { "Калибр": "4.5 мм (.177)", "Ылдамдыгы": "150 м/с", "Приклад": "Пластик", "Салмагы": "3.0 кг" }
    },
    {
        id: 15,
        title: "Hatsan Striker Edge 1000X",
        category: "airgun",
        brand: "Застава",
        caliber: "4.5 mm",
        price: 21000,
        badge: "Кубаттуу",
        image: "https://img.ohotaktiv.ru/upload/iblock/3c5/ce49qz485rd4cxx0jqi1wzdywy66rakp.webp",
        requiresLicense: false,
        description: "Жогорку ылдамдыктагы газопружиналуу пневматика винтовкасы. Жангак жыгачынан жасалган кооз прикладу бар.",
        specs: { "Калибр": "4.5 мм", "Ылдамдыгы": "305 м/с", "Приклад": "Жангак жыгачы", "Салмагы": "3.2 кг" }
    },
    {
        id: 16,
        title: "Тактикалык Аңчылык Рюкзагы 45L",
        category: "gear",
        brand: "Вектор",
        caliber: "-",
        price: 6500,
        badge: "Аксессуар",
        image: "https://images.prom.ua/4154576870_w640_h2048_aptava.png?fresh=1&PIMAGE_ID=4154576870",
        requiresLicense: false,
        description: "Суу өткөрбөгөн Кордура материалынан жасалган, курал бекитүүчү атайын боолору бар рюкзак.",
        specs: { "Көлөмү": "45 литр", "Материал": "Cordura 1000D", "Түсү": "Multicam / Олива" }
    },
    {
        id: 17,
        title: "Курал Сейфи Оружейный (2 куралга)",
        category: "gear",
        brand: "Байкал",
        caliber: "-",
        price: 18000,
        badge: "Милдеттүү",
        image: "https://imperia.kg/image/cache/catalog/dombytsad/seyfy/promet/oruzhejnyesejfy/aiko-berkut/aikoberkut-3-1000x1000.png",
        requiresLicense: false,
        description: "КР ИИМ талаптарына толук жооп берген 2 мм болоттон жасалган сейф. Патрондор үчүн өзүнчө трейзери бар.",
        specs: { "Бийиктиги": "1300 мм", "Калыңдыгы": "2 мм болот", "Кулпу": "2 коопсуздук кулпусу", "Салмагы": "24 кг" }
    },
    {
        id: 18,
        title: "Активдүү Наушник Earmor M31 MOD3",
        category: "gear",
        brand: "Вектор",
        caliber: "-",
        price: 8500,
        badge: "Коргоо",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fNwnxQ2tA7FzNowJQ3ybuB5IWEW8veWh1Ro9Eniw7A&s=10",
        requiresLicense: false,
        description: "Атуу учурундагы катуу добушту (82dB жогору) автоматтык түрдө басып, акырын чыккан үндөрдү күчөтүп угузуучу кулакчын.",
        specs: { "Басуу деңгээли": "NRR 22", "Азыктануу": "2xAAA", "Суу коргоо": "IPX-5", "Салмагы": "350 гр" }
    },
    {
        id: 19,
        title: "Сайга-9 (9x19) Карабин",
        category: "rifled",
        brand: "Калашников",
        caliber: "9x19",
        price: 92000,
        badge: "Хит",
        image: "https://img.air-gun.ru/images/big/84782.webp",
        requiresLicense: true,
        description: "9x19 мм калибриндеги тапанчалык патрон менен атуучу тактикалык карабин. Спорттук атуу жана өзүн коргоо үчүн абдан популярдуу.",
        specs: { "Калибр": "9x19 mm Parabellum", "Ствол узундугу": "367 мм", "Ок баткыч": "10/30 ок", "Салмагы": "3.1 кг" }
    },
    {
        id: 20,
        title: "Glock 17 Gen5 Травматикалык / Спортивный",
        category: "rifled",
        brand: "Застава",
        caliber: "9x19",
        price: 185000,
        badge: "Премиум",
        image: "https://img.air-gun.ru/images/big/136475.webp",
        requiresLicense: true,
        description: "Дүйнөгө белгилүү Австриялык пистолет. Спорттук тирде атуу жана тиешелүү уруксат кагазы бар жарандар үчүн.",
        specs: { "Калибр": "9x19 mm", "Ок баткыч": "17 ок", "Рама": "Полимер", "Салмагы": "625 гр" }
    },
    {
        id: 21,
        title: "Патрон БПЗ 9x19 FMJ (50 даана)",
        category: "ammo",
        brand: "Байкал",
        caliber: "9x19",
        price: 2800,
        badge: "Запас бар",
        image: "https://img.ohotaktiv.ru/upload/iblock/175/qbfe4aer17znhffld99pc1xoxbp9nfdt.webp",
        requiresLicense: true,
        description: "9x19 mm калибрдеги пистолеттер жана Сайга-9 карабин үчүн латун капталган оболочечный патрондор.",
        specs: { "Ок салмагы": "7.46 грамм", "Ылдамдыгы": "350 м/с", "Таңгак": "50 даана" }
    },
    {
        id: 22,
        title: "Вепрь-15 (ВПО-140 / AR-15) Карабин",
        category: "rifled",
        brand: "Калашников",
        caliber: ".223 Rem",
        price: 195000,
        badge: "Тактикалык",
        image: "https://vistrel.club/upload/iblock/294/karabin_vepr_15.jpeg",
        requiresLicense: true,
        description: "Америкалык AR-15 платформасындагы .223 Rem калибриндеги натыйжалуу жана так атуучу карабин.",
        specs: { "Калибр": ".223 Rem (5.56x45)", "Ствол узундугу": "420 мм", "Ок баткыч": "10 ок", "Салмагы": "3.2 кг" }
    },
    {
        id: 23,
        title: "Сайга-MK ИСП.33 (.223 Rem) Карабин",
        category: "rifled",
        brand: "Калашников",
        caliber: ".223 Rem",
        price: 88000,
        badge: "Бестселлер",
        image: "https://img.air-gun.ru/images/big/84307/161122693310072.webp",
        requiresLicense: true,
        description: "АК-102 базасында жасалган чакан, жеңил карабин. Түлкү, бөрү жана чакан айбанаттарга аңчылык кылууга идеалдуу.",
        specs: { "Калибр": ".223 Rem", "Ствол узундугу": "336 мм", "Приклад": "Бүктөлмө", "Салмагы": "3.2 кг" }
    },
    {
        id: 24,
        title: "Патрон БПЗ .223 Rem FMJ (20 даана)",
        category: "ammo",
        brand: "Байкал",
        caliber: ".223 Rem",
        price: 2600,
        badge: "Запас бар",
        image: "https://hft.ru/upload/thumbs/source/productimage/image/5702401b67bc2_5eb42e09a16a5.jpeg",
        requiresLicense: true,
        description: ".223 Rem (5.56x45) калибриндеги карабиндер үчүн оболочечный машыгуу жана аңчылык патрону.",
        specs: { "Ок салмагы": "4.0 грамм", "Ылдамдыгы": "890 м/с", "Таңгак": "20 даана" }
    }
];

// Global State
let currentCategory = 'all';
let cart = [];

// App Init
window.onload = function() {
    renderProducts(products);
    updateCartUI();
};

// Notice Modal Handler
function showNotice(title, message, iconClass = 'fa-circle-info', callback = null) {
    document.getElementById('notice-title').innerText = title;
    document.getElementById('notice-message').innerText = message;
    document.getElementById('notice-icon').innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
    
    const btn = document.getElementById('notice-btn');
    btn.onclick = function() {
        closeNoticeModal();
        if (typeof callback === 'function') callback();
    };
    
    document.getElementById('notice-modal').classList.remove('hidden');
}

function closeNoticeModal() {
    document.getElementById('notice-modal').classList.add('hidden');
}

// Age Verification Logic
function confirmAge(isAdult) {
    if (isAdult) {
        document.getElementById('age-modal').classList.add('hidden');
    } else {
        showNotice(
            "Кирүүгө болбойт", 
            "Кечиресиз, 21 жашка толо элек жарандарга курал-жарак каталогун көрүүгө мыйзам тарабынан тыюу салынат.", 
            "fa-triangle-exclamation",
            function() { window.location.href = "https://www.google.com"; }
        );
    }
}

// Render Product Grid
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    const empty = document.getElementById('empty-state');
    document.getElementById('product-count').innerText = items.length;
    if (items.length === 0) {
        grid.innerHTML = '';
        empty.classList.remove('hidden');
        return;
    }
    empty.classList.add('hidden');
    grid.innerHTML = items.map(product => `
        <div class="bg-tactical-800 border border-tactical-700 hover:border-tactical-gold/60 rounded-xl overflow-hidden shadow-lg transition duration-300 flex flex-col justify-between group">
            <div>
                <!-- Image Container -->
                <div class="relative h-48 bg-black/50 overflow-hidden cursor-pointer" onclick="openProductModal(${product.id})">
                    <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <span class="absolute top-2 left-2 bg-tactical-gold text-black font-extrabold text-[10px] px-2.5 py-1 rounded uppercase tracking-wider shadow">
                        ${product.badge}
                    </span>
                    ${product.requiresLicense ? `
                        <span class="absolute top-2 right-2 bg-tactical-red/90 text-white font-bold text-[9px] px-2 py-1 rounded flex items-center gap-1">
                            <i class="fa-solid fa-certificate"></i> Лицензия
                        </span>
                    ` : ''}
                </div>
                <!-- Info -->
                <div class="p-4">
                    <div class="text-[10px] text-tactical-gold font-bold uppercase tracking-wider mb-1">
                        ${product.brand} • <span class="text-gray-400">${product.caliber}</span>
                    </div>
                    <h3 onclick="openProductModal(${product.id})" class="text-sm font-bold text-white hover:text-tactical-gold transition cursor-pointer line-clamp-2 mb-2">
                        ${product.title}
                    </h3>
                    <p class="text-xs text-gray-400 line-clamp-2 mb-4">
                        ${product.description}
                    </p>
                </div>
            </div>
            <!-- Footer / Price / Actions -->
            <div class="p-4 border-t border-tactical-700/60 bg-tactical-900/40 flex items-center justify-between">
                <div>
                    <span class="text-[10px] text-gray-500 block uppercase">Баасы:</span>
                    <span class="text-lg font-black text-tactical-gold font-mono">${product.price.toLocaleString()} сом</span>
                </div>
                <button onclick="addToCart(${product.id})" class="bg-tactical-700 hover:bg-tactical-gold hover:text-black text-tactical-gold p-2.5 rounded-lg transition border border-tactical-gold/30">
                    <i class="fa-solid fa-cart-plus text-sm"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Filtering Logic
function filterProducts(isMobile = false) {
    const query = (isMobile 
        ? document.getElementById('search-input-mobile').value 
        : document.getElementById('search-input').value).toLowerCase();
    
    const maxPrice = parseInt(document.getElementById('price-range').value);
    const brand = document.getElementById('brand-select').value;
    const licenseOnly = document.getElementById('license-only').checked;
    const sort = document.getElementById('sort-select').value;
    
    const selectedCalibers = Array.from(document.querySelectorAll('.caliber-checkbox:checked')).map(cb => cb.value);
    
    let filtered = products.filter(p => {
        if (currentCategory !== 'all' && p.category !== currentCategory) return false;
        if (query && !p.title.toLowerCase().includes(query) && !p.caliber.toLowerCase().includes(query) && !p.brand.toLowerCase().includes(query)) return false;
        if (p.price > maxPrice) return false;
        if (brand !== 'all' && p.brand !== brand) return false;
        if (licenseOnly && !p.requiresLicense) return false;
        if (selectedCalibers.length > 0 && !selectedCalibers.some(c => p.caliber.includes(c))) return false;
        return true;
    });

    if (sort === 'low') filtered.sort((a, b) => a.price - b.price);
    if (sort === 'high') filtered.sort((a, b) => b.price - a.price);
    if (sort === 'name') filtered.sort((a, b) => a.title.localeCompare(b.title));
    
    renderProducts(filtered);
}

function filterCategory(cat, evt) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('bg-tactical-gold', 'text-black');
        btn.classList.add('text-gray-300');
    });
    if (evt && evt.target) {
        const targetBtn = evt.target.closest('.cat-btn');
        if (targetBtn) {
            targetBtn.classList.add('bg-tactical-gold', 'text-black');
            targetBtn.classList.remove('text-gray-300');
        }
    }
    filterProducts();
}

function updatePriceLabel(val) {
    document.getElementById('price-display').innerText = parseInt(val).toLocaleString() + ' сом';
}

function resetFilters() {
    document.getElementById('search-input').value = '';
    document.getElementById('search-input-mobile').value = '';
    document.getElementById('price-range').value = 350000;
    updatePriceLabel(350000);
    document.getElementById('brand-select').value = 'all';
    document.getElementById('license-only').checked = false;
    document.querySelectorAll('.caliber-checkbox').forEach(cb => cb.checked = false);
    currentCategory = 'all';
    filterProducts();
}

// Product Modal Logic
function openProductModal(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const modalContent = document.getElementById('product-modal-content');
    modalContent.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-black/60 rounded-lg overflow-hidden flex items-center justify-center p-2 border border-tactical-700">
                <img src="${p.image}" alt="${p.title}" class="max-h-72 object-contain">
            </div>
            <div class="space-y-4">
                <span class="bg-tactical-gold/20 text-tactical-gold border border-tactical-gold/40 text-[10px] font-bold px-2.5 py-1 rounded uppercase">
                    ${p.brand} • ${p.caliber}
                </span>
                <h2 class="text-xl font-bold text-white leading-snug">${p.title}</h2>
                <p class="text-xs text-gray-300 leading-relaxed">${p.description}</p>
                
                <div class="border-t border-b border-tactical-700 py-3 my-2 space-y-1 text-xs">
                    <h4 class="font-bold text-tactical-gold uppercase text-[11px]">Техникалык Мунөздөмөлөрү:</h4>
                    ${Object.entries(p.specs).map(([key, val]) => `
                        <div class="flex justify-between text-gray-300">
                            <span class="text-gray-500">${key}:</span>
                            <span class="font-semibold text-white">${val}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="flex items-center justify-between pt-2">
                    <div>
                        <span class="text-[10px] text-gray-400 block uppercase">Баасы:</span>
                        <span class="text-2xl font-black text-tactical-gold font-mono">${p.price.toLocaleString()} сом</span>
                    </div>
                    <button onclick="addToCart(${p.id}); closeProductModal();" class="bg-tactical-gold hover:bg-tactical-goldHover text-black font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider shadow transition">
                        <i class="fa-solid fa-cart-plus mr-1"></i> Брондоо
                    </button>
                </div>
            </div>
        </div>
    `;
    document.getElementById('product-modal').classList.remove('hidden');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.add('hidden');
}

// Cart Drawer Logic
function addToCart(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    cart.push(p);
    updateCartUI();
    openCartDrawer();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const container = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-gray-500 text-xs">
                <i class="fa-solid fa-shield-cat text-3xl mb-2 text-gray-600 block"></i>
                Себет азырынча бош.
            </div>
        `;
        document.getElementById('cart-total').innerText = '0 сом';
        return;
    }
    let total = 0;
    container.innerHTML = cart.map((p, idx) => {
        total += p.price;
        return `
            <div class="bg-tactical-900 border border-tactical-700 p-3 rounded-lg flex items-center justify-between gap-3 text-xs">
                <img src="${p.image}" class="w-12 h-12 object-cover rounded bg-black">
                <div class="flex-1">
                    <h4 class="font-bold text-white line-clamp-1">${p.title}</h4>
                    <span class="text-tactical-gold font-mono text-xs font-bold">${p.price.toLocaleString()} сом</span>
                </div>
                <button onclick="removeFromCart(${idx})" class="text-gray-500 hover:text-tactical-red transition p-1">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');
    document.getElementById('cart-total').innerText = total.toLocaleString() + ' сом';
}

function openCartDrawer() { 
    document.getElementById('cart-drawer').classList.remove('hidden'); 
}

function closeCartDrawer() { 
    document.getElementById('cart-drawer').classList.add('hidden'); 
}

// Checkout Modal
function openCheckoutModal() {
    if (cart.length === 0) {
        showNotice("Себет бош", "Брондоо үчүн алгач каталогдон товар тандаңыз!", "fa-cart-shopping");
        return;
    }
    closeCartDrawer();
    document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').classList.add('hidden');
}

async function handleCheckout(e) {
    e.preventDefault();
    
    const fullName = e.target.querySelector('input[placeholder*="Асанов"]').value;
    const phone = e.target.querySelector('input[type="tel"]').value;
    const branch = e.target.querySelector('select').value;
    const licenseNo = e.target.querySelector('input[placeholder*="ЛК-"]').value;
    
    const { error } = await _supabase.from('reservations').insert([
        { 
            full_name: fullName, 
            phone: phone, 
            branch: branch, 
            license_number: licenseNo 
        }
    ]);
    
    if (error) {
        alert('Базага сактоодо ката чыкты: ' + error.message);
        return;
    }
    
    const reservationNo = "#MRG-" + Math.floor(100000 + Math.random() * 900000);
    showNotice(
        "Брондоо кабыл алынды", 
        `Рахмат! Сиздин брондоо кабыл алынды жана базага сакталды.\nБрондоо номери: ${reservationNo}`, 
        "fa-circle-check",
        function() {
            cart = [];
            updateCartUI();
            closeCheckoutModal();
        }
    );
}

// Interactive Game Finder Widget Logic
function toggleCaliberWidget() {
    const widget = document.getElementById('caliber-widget');
    widget.classList.toggle('hidden');
}

function selectGame(type) {
    const rec = document.getElementById('game-recommendation');
    rec.classList.remove('hidden');
    let html = '';
    if (type === 'goat') {
        html = `
            <div class="text-tactical-gold font-bold mb-1"><i class="fa-solid fa-check-circle"></i> Сунушталган Калибр: .308 Win / 30-06 / .300 Win Mag</div>
            <p class="text-gray-300">Тоодо узак аралыкка (300м+) атуу үчүн жогорку ылдамдыктагы жана кубаттуу сайлуу курал зарыл. Оптика 12x+ чоңойтуучу болушу сунушталат.</p>
        `;
    } else if (type === 'boar') {
        html = `
            <div class="text-tactical-gold font-bold mb-1"><i class="fa-solid fa-check-circle"></i> Сунушталган Калибр: 12/76 (Пуля) же 7.62x39 mm</div>
            <p class="text-gray-300">Токойдо же бадалда каманга каршы токтотуучу күчү жогору полуавтоматтык жылмакай куралдар же 7.62x39 карабиндери идеалдуу.</p>
        `;
    } else if (type === 'birds') {
        html = `
            <div class="text-tactical-gold font-bold mb-1"><i class="fa-solid fa-check-circle"></i> Сунушталган Калибр: 12/76 же 16 калибр (Дробь №3-№7)</div>
            <p class="text-gray-300">Өрдөк жана кеклик уулоого жеңил, тез мээленүүчү полуавтомат же эки стволдуу жылмакай куралдар ылайыктуу.</p>
        `;
    } else if (type === 'predator') {
        html = `
            <div class="text-tactical-gold font-bold mb-1"><i class="fa-solid fa-check-circle"></i> Сунушталган Калибр: .223 Rem (5.56x45) / 224 Valkyrie</div>
            <p class="text-gray-300">Түлкү жана бөрү уулоодо куйругу менен терисин бузбаган, ылдам атылуучу кичине калибрдеги натыйжалуу карабиндер.</p>
        `;
    }
    rec.innerHTML = html;
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
    nav.classList.toggle('flex-col');
}

// Admin Panel Logic
const ADMIN_USER = "admin";
const ADMIN_PASS = "mergen2026";

function openAdminAuth() {
    document.getElementById('admin-modal').classList.remove('hidden');
    document.getElementById('admin-modal').classList.add('flex');
}

function closeAdminModal() {
    document.getElementById('admin-modal').classList.add('hidden');
    document.getElementById('admin-modal').classList.remove('flex');
}

function checkAdminLogin() {
    const user = document.getElementById('admin-user').value;
    const pass = document.getElementById('admin-pass').value;
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        document.getElementById('admin-login-form').classList.add('hidden');
        document.getElementById('admin-dashboard').classList.remove('hidden');
        loadSiteReservations();
    } else {
        alert("Логин же сыр сөз ката!");
    }
}

async function loadSiteReservations() {
    const list = document.getElementById('site-reservations-list');
    list.innerHTML = `<tr><td colspan="4" class="text-center py-6 text-gray-400">Жүктөлүүдө...</td></tr>`;
    
    if (typeof _supabase === 'undefined') {
        list.innerHTML = `<tr><td colspan="4" class="text-center py-6 text-red-400">Supabase туташкан жок!</td></tr>`;
        return;
    }
    
    const { data, error } = await _supabase
        .from('reservations')
        .select('*')
        .order('created_at', { ascending: false });
        
    if (error) {
        list.innerHTML = `<tr><td colspan="4" class="text-center py-6 text-red-400">Ката чыкты: ${error.message}</td></tr>`;
        return;
    }
    
    if (!data || data.length === 0) {
        list.innerHTML = `<tr><td colspan="4" class="text-center py-6 text-gray-400">Азырынча брондоолор жок.</td></tr>`;
        return;
    }
    
    list.innerHTML = '';
    data.forEach(item => {
        // Бош же маалыматы жок катарлар ката бербеши үчүн текшерүү кошулду
        const fullName = item.full_name && item.full_name.trim() !== '' ? item.full_name : 'Көрсөтүлгөн эмес';
        const phone = item.phone && item.phone.trim() !== '' ? item.phone : 'Номер жок';
        const branch = item.branch || '-';
        const license = item.license_number || 'Жок';
        const dateStr = item.created_at ? new Date(item.created_at).toLocaleString('ky-KG') : '-';

        list.innerHTML += `
            <tr class="hover:bg-tactical-800/60 transition">
                <td class="p-3">
                    <div class="font-bold text-white">${fullName}</div>
                    <div class="text-[11px] text-tactical-gold font-mono">${phone}</div>
                </td>
                <td class="p-3 text-gray-300">${branch}</td>
                <td class="p-3 font-mono text-gray-200">${license}</td>
                <td class="p-3 text-[11px] text-gray-400 font-mono">${dateStr}</td>
            </tr>
        `;
    });
}
