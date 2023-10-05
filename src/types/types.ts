export type LocalizationKeys = {
    navigation: {
      [key: string]: string;
    };
  };
  
 export type NavItemType = {
    to: string,
    icon: string,
    title: 'about' | 'contact' | 'services' | 'portfolio' | 'home'
}
