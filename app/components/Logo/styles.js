import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
   $largeContainerSize: imageWidth,
   $largeImageSize: imageWidth / 2,
   $smallContainerSize: imageWidth / 2,
   $smallImageSize: imageWidth / 4,
   container:{
       alignItems: 'center',
   },
   containerImage:{
       alignItems: 'center',
       justifyContent: 'center',
       width: '$largeContainerSize',
       height: '$largeContainerSize',           
   },
   
   mark: {
    width: null,
    height: null,
    flex: 1,
   },
   markWrap: {
    flex: 1,
    paddingVertical: 30,
   },

  
});