export const routes = {
  Home: 'Home',
  Details: 'Details',
  Modal: 'Modal',
};

export const uriPrefix = 'phattv_ecommerce'; // to handle deep_link

export const reduxStoreId = 'root';

// TODO: read from env variable
export const BASE_URL = 'http://35.240.212.226';

export const pageSize = 6;

// UI constants
const spacingUnit = 10;
export const styleConstants = {
  border: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: spacingUnit / 2,
  },
  spacing: spacingUnit,
  paddingTop: {
    paddingTop: spacingUnit,
  },
  fonts: {
    header: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerNotBold: {
      fontSize: 20,
    },
    headerTwo: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    hyperlink: {
      color: '#07C',
    },
  },
  layout: {
    leftRightView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: spacingUnit / 2,
    },
  },
};
