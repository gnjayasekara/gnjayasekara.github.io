// Define a type for menu items
type MenuItem = {
    link: string;
    content: string;
    icon: string;
  };
  
  // Define the mainMenu array with the MenuItem type
  export const mainMenu: MenuItem[] = [
    { link: "#", content: "Home", icon: "lucide:home" },
    { link: "#about", content: "About", icon: "octicon:person-24" },
    { link: "#portafolio", content: "Portfolio", icon: "carbon:portfolio" },
    { link: "#blog", content: "Blog", icon: "mdi:blog" },
  ];
  
  // Define the menuBlog array with the MenuItem type
  export const menuBlog: MenuItem[] = [
    { link: "/", content: "Home", icon: "lucide:home" },
    { link: "/#about", content: "About", icon: "octicon:person-24" },
    { link: "/#portafolio", content: "Portfolio", icon: "carbon:portfolio" },
  ];
  