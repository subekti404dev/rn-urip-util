import * as moment from 'moment';

export const formatDate = (date: string, format: string = "DD/MM/YYYY HH:mm" ) => {
  return moment(date).format(format).toString();
}

