export interface WpUser {
  id: string;
  name: string;
  url: string;
  description: string;
  slug: string;
  avatar_urls: {
    24: string,
    48: string,
    96: string
  };

  /** TODO:  find solution for: 
   *  Those properties don't exist in user response by default
   **/
  roles: string[];
  email: string[];
  registered: string[];
  username: string;
}

