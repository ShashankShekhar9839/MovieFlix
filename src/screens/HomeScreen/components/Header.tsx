import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../../../common/Colors';
import Constants from '../../../common/Constants';
import GenreList from './GenreList';

const SEARCH_ICON = require('./../../../assets/searchIcon.png');

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{Constants.strings.movieFlix}</Text>
        <Pressable
          onPress={() => {
            /** TODO : navigateToModel */
          }}>
          <Image source={SEARCH_ICON} />
        </Pressable>
      </View>
      <GenreList />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGrey,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginEnd: Constants.dimens.size_16,
    marginTop: Constants.dimens.size_8,
  },
  title: {
    color: Colors.darkRed,
    fontSize: Constants.fontSize.size_26,
    marginHorizontal: Constants.dimens.size_16,

    fontWeight: 'bold',
  },
});
