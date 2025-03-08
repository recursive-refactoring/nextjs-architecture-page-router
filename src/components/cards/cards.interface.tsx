export interface ItemAvatarCountCardPropsI {
  name: string;
  avatarSrc: any;
  count: number;
}

export interface ActivityInfoCardPropsI {
  name: string;
  info: string;
  infoColor?: string;
  extraInfo?: string;
}

export interface ActivityCardPropsI {
  activityType?: string | undefined;
  activityInfo?: string | undefined;
  activityDate?: Date | string;
  dateFormat?: string;
  hasBorderBottom?: boolean;
  paddingX?: number;
}
