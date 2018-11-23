import { observable, action } from 'mobx'



class StepFormStore{
    //初始化
    @observable current = 0
    @observable info = {}
    
    //动作
    @action setCurrent(current){
        this.current = current
    }
    @action ScopedCredentialInfo(info){
        this.info = info
    }
}

export default new StepFormStore()