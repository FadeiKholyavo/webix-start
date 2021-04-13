import {footer} from "./footer.js";
import {header} from "./header.js";
import {section} from "./section.js";
import {categories} from "./data-collections/collections.js";
import {users_data} from "./data-collections/collections.js";

webix.ui({
    rows: [
        header,
        section,
        footer
    ]
});


$$("categoriesTable").sync(categories);
$$("categoryForm").bind($$("categoriesTable"));


$$("usersList").sync(users_data, function(){
    this.each(el =>{
        el.$css = el.age < 26 ? "user-background" : "" ;
    })
})
$$("ageChart").sync(users_data, function(){
    this.group({
        by: "country",
        map:{
            country: ["country", "any"],
            amount: ["country", "count"],
            users: ["name", "names"]
        }
    });
});

