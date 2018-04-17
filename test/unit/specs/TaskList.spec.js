import Vue from 'vue'
import TaskList from '@/components/TaskList'
import { Task } from '@/models/Task'

function getMountedComponent(Component, propsData){
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({ propsData }).$mount()
    
    return vm
}

describe('TaskList.vue', () => {
    let vm = {}

    beforeEach(() => {
        let taskList = []
        let task = new Task()
        let task2 = new Task()
        let task3 = new Task()
        task.title = 'Comprar frango'
        task2.title = 'Comprar batata doce'
        task3.title = 'Virar body builder'
        taskList.push(task);
        taskList.push(task2);
        taskList.push(task3);

        vm = getMountedComponent(TaskList, {
            todoList: taskList
        })

    })

    it('should render correct contents', () => {
        expect(vm.todoList.length).to.equal(3)
    })

    it('should toggle item list status', () => {
        let task = vm.todoList[0]
        let completed = task.completed

        vm.completeTask(task)

        expect(task.completed).to.equal(!completed)        
    })
})

