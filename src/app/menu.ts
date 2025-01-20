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
        subMenus:[{
            name:"Müşteriler",
            icon:"fas fa fa-users",
            url:"/customers",
            isTitle:false,
            subMenus:[]

        }]
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