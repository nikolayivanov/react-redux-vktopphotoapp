
/*eslint-disable */
// store - redux-store нашего приложения;
// next - функция-обертка, которая позволяет продолжить выполнение цепочки;
// action - действие, которое было вызвано (как вы помните, вызванные действия - это store.dispatch)
export const ping = store => next => action => {
	console.log('Тип ' + action.type +' значение ' +action.payload)
	return next(action)
}
/*eslint-enable */