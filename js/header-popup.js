import {profile_menu} from "../data/testdata.js";

export const popupMenu = {
        view:"popup", 
        width: 300,
        body:{
            view: "list",
            data: profile_menu,
            autoheight:true,
            select: true
        }
    }
