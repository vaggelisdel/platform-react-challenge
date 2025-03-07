/* ----------- STATE TYPES -------------  */

export interface IUserDetails {
  username?: string;
  optInForQuickLogin?: boolean;
  isQuickLoginForPinEnabled?: boolean;
  isQuickLoginForBiometricsEnabled?: boolean;
  languageTag?: string;
  decimalSeparator?: string;
  thousandsSeparator?: string;
  profilePictureUri?: string;
  backgroundModeTimer?: Date;
  isFirstLogin?: boolean;
  applePayModalCounter?: number;
  areContactPermissionsBlocked?: boolean;
  areCameraPermissionsBlocked?: boolean;
  areStoragePermissionsBlocked?: boolean;
  areLocationPermissionsBlocked?: boolean;
}