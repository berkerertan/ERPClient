export class MenuModel{
    name: string ="";
    icon:string ="";
    url:string="";
    isTitle:boolean=false;
    subMenus:MenuModel[]=[];
}

export const Menus: MenuModel[]=[
    {
        name:"Ana Sayfa",
        icon:"fas fa-solid fa-home",
        url:"/",
        isTitle:false,
        subMenus:[]
    },
    {
        name:"Ana Group",
        icon:"fa",
        url:"",
        isTitle:false,
        subMenus:[
            {
            name:"Müşteriler",
            icon:"fas fa fa-users",
            url:"/customers",
            isTitle:false,
            subMenus:[] 
        },
        {
            name:"Depolar",
            icon:"fas fa fa-warehouse",
            url:"/depots",
            isTitle:false,
            subMenus:[]
        },
        {
            name:"Ürünler",
            icon:"fas fa fa-warehouse",
            url:"/products",
            isTitle:false,
            subMenus:[]
        },
        {
            name:"Reçeteler",
            icon:"fas fa fa-warehouse",
            url:"/recipes",
            isTitle:false,
            subMenus:[]
        }
    ]
    },
    {
        name:"Siparişler",
        icon:"fas fa-solid fa-clipboard-list",
        url:"/orders",
        isTitle:false,
        subMenus:[]
    }
    // {
    //     name:"Admin",
    //     icon:"",
    //     url:"",
    //     isTitle:true,
    //     subMenus:[]
    // },
    // {
    //     name:"Yönetim",
    //     icon:"far fa fa-users",
    //     url:"",
    //     isTitle:false,
    //     subMenus:[
    //         {
    //             name:"Kullanıcılar",
    //             icon:"far fa-solid fa-user",
    //             url:"/users",
    //             isTitle:false,
    //             subMenus:[]
    //         }
    //     ]
    // }
]