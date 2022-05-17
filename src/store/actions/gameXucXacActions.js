import * as gameXucXacConstants from '../constants/gameXucXacContants';
export const actChonTaiXiu = taiXiu => ({
    type: gameXucXacConstants.CHON_TAI_XIU,
    payload: taiXiu,
});

export const actDatCuoc = () =>({
    type: gameXucXacConstants.DAT_CUOC,
});