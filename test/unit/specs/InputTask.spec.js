import Vue from 'vue'
import InputTask from '@/components/InputTask'

describe('InputTask.vue', () => {

    let vm = {}

    beforeEach(function(){
        const Constructor = Vue.extend(InputTask)
        vm = new Constructor().$mount()
    })

    it('should render correct contents', () => {
        expect(vm.$el.querySelectorAll('.new-todo').length).to.equal(1)
    })

    it('should create the task correctly', () => {
        let title = 'Lavar a louca'
        let task = vm.createTask(title)

        expect(task.title).to.equal(title)
    })

    it('should create a task not completed', () => {
        let title = 'Lavar a louca'
        let task = vm.createTask(title)

        expect(task.completed).to.be.false
    })

    it('should clean the input', () => {
        vm.$el.querySelector('.new-todo').value = 'Foo'
        vm.clearField()

        expect(vm.$el.querySelector('.new-todo').value).to.equal('')
    })

    it('should call the event', () => {
        let spy = sinon.spy()
        vm.$on('newTask', spy)
        vm.broadcast()

        expect(spy).to.have.been.called
    })
})