export type LocalizationKeys = {
    navigation: {
      [key: string]: string;
    };
  };
  
 export type NavItemType = {
    to: string,
    icon: string,
    title: 'about' | 'contact' | 'services' | 'cases' | 'home'
}

export type FormDataType = {
  name: string;
  subject: string;
  email: string;
  message: string;
};