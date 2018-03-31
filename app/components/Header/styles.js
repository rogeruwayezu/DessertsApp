
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    smallContainer: {
        flex: 0.19,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 20,

    },

    iconBar: {
        tintColor: '#ff1a75'
    },
    icon: {
        tintColor: '#bfbfbf',
        width: 18,
    },

    viewStyle: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 75,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 25,
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 7,
        position: 'relative'
      },

});

export default styles;





