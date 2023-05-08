import { AbstractView } from '../../common/view.js';

export class MainView extends AbstractView {
	constructor() {
		super();
		this.setTitle('Поиск книг');
	}

	render() {
		const main = document.createElement('div');
		this.app.innerHTML = '';
		main.innerHTML = 'Test';
		this.app.append(main);
	}
}