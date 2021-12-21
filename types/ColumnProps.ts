type Column = {
  id: string;
  title: string;
  description?: string;
  links?:
    | {
        id: string;
        text: string;
        path: string;
      }[]
    | undefined;
  link?: string | undefined;
  icon?: string | undefined;
  phone?: string | undefined;
  openDays?: string | undefined;
  openTime?: string | undefined;
  email?: string | undefined;
  helpDesk?: string | undefined;
};
export default Column;
