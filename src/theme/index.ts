import { normalize } from '../utils/normalize'

export default {
  COLORS: {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    GREY: 'rgba(255,255,255,0.5)',
    CONDITION: ['#29B2DD', '#33AADD', '#2DC8EA'],
    DAY_RAIN: ['#08244F', '#134CB5', '#0B42AB'],
    NIGHT_RAIN: ['#00033F', '#000443', '#000'],
    NIGHT_CLEAN: ['#44444F', '#888', '#444']
  },
  FONT_FAMILY: {
    REGULAR_SF: 'SF-Pro-Display-Regular',
    MEDIUM_ALEGREYASANS: 'AlegreyaSans-Medium',
    SEMIBOLD_SF: 'SF-Pro-Display-Semibold',
    BOLD_ALEGREYASANS: 'AlegreyaSans-Bold',
    BOLD_SF: 'SF-Pro-Display-Bold'
  },
  FONT_WEIGHT: {
    REGULAR_SF: '400',
    MEDIUM: '500',
    SEMIBOLD_SF: '600',
    BOLD_SF: 'bold'
  },
  FONT_SIZE: {
    P: normalize(10),
    MD: normalize(14),
    LG: normalize(18),
    XL: normalize(20),
    XXL: normalize(64)
  },
  SPACING: {
    P: normalize(5),
    PM: normalize(10),
    M: normalize(12),
    MD: normalize(20),
    LM: normalize(30),
    LG: normalize(38),
    XL: normalize(40)
  },
  BORDER_RADIUS: {
    LG: normalize(20)
  }
}
