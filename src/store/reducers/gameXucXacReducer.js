import * as gameXucXacConstants from '../constants/gameXucXacContants';
const initialState = {
    mangXucXac:[
        {diem: 1, hinhAnh: './images/gameXucSac/1.png'},
        {diem: 1, hinhAnh: './images/gameXucSac/1.png'},
        {diem: 1, hinhAnh: './images/gameXucSac/1.png'},
    ],
    taiXiu: true, //true => TAI (3 -> 11), false -> XIU (>= 12)
    soBanThang: 0,
    tongSoBanChoi: 0,

}
const gameXucXacReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case gameXucXacConstants.CHON_TAI_XIU:
            // state.taiXiu = payload; 
            return {...state, taiXiu: payload};

        case gameXucXacConstants.DAT_CUOC:
            //Tang tong so ban choi
            state.tongSoBanChoi += 1;

            //Random Xuc Xac
            const mangXucXacRandom =[];
            for(let i = 0; i<3; i++){
                const randomNum = Math.floor(Math.random() *6) + 1;
                const xucXacRandom = {
                    diem: randomNum,
                    hinhAnh: `./images/gameXucSac/${randomNum}.png`
                }

                mangXucXacRandom.push(xucXacRandom);
            }

            //Tinh tong diem xuc xac 
            const tongDiem = mangXucXacRandom.reduce((tongDiem, xucXac)=>{
                return tongDiem += xucXac.diem
            }, 0);

            //Kiem tra so ban thang 
            if((state.taiXiu && tongDiem <= 11) || (!state.taiXiu && tongDiem >= 12)){
                state.soBanThang += 1;
            }
            return {...state, mangXucXac: mangXucXacRandom};

        default:
            return state;
    }
}

export default gameXucXacReducer;