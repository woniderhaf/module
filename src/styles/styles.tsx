import { StyleSheet } from 'react-native';

export enum COLORS {
  // main = '#40E0D0',
  main = '#FFF',
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: COLORS.main,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gap10: {
    gap: 10,
  },
  v_center: {
    alignItems: 'center',
  },
  h_center: {
    justifyContent: 'center',
  },
  t_center: {
    textAlign: 'center',
  },
  //text
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
  },
  // title
  h1: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 20,
  },
  h2: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
  },
  //mb
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  mb25: {
    marginBottom: 25,
  },
});
