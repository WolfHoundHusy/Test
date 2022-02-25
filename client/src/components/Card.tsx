import { Button } from 'reactstrap';
import {
	ActionCard,
	Card,
	CardType,
	HubCard,
	Industry,
	Step,
} from '../types/types';

function IndustryToColor(industry: Industry) {
	switch (industry) {
		case Industry.FOOD:
			return '#ECC30B';
		case Industry.TECH:
			return '#84BCDA';
		case Industry.CLOTHES:
			return '#F37748';
	}
}

export default function CardComponent(props: {
	card: Card;
	onClick: () => void;
	selected?: boolean;
}) {
	return props.card.cardType == CardType.ACTION ? (
		<ActionCardComponent
			card={props.card as ActionCard}
			onClick={props.onClick}
			selected={props.selected}
		/>
	) : (
		<HubCardComponent
			card={props.card as HubCard}
			onClick={props.onClick}
			selected={props.selected}
		/>
	);
}

function ActionCardComponent(props: {
	card: ActionCard;
	onClick: () => void;
	selected?: boolean;
}) {
	return (
		<div
			className={`rounded-box shadow card ${
				props.selected ? 'selected' : null
			}`}
			onClick={props.onClick}>
			<div
				className='top-color-area'
				style={{
					backgroundColor: 'none',
				}}></div>
			<h1
				style={{
					fontSize: 50,
				}}>
				{props.card.emoji}
			</h1>
			<p className='normal-and-bold no-padding'>
				{props.card.displayName}
			</p>
			<p className='no-padding'>{props.card.description}</p>
		</div>
	);
}

function HubCardComponent(props: {
	card: HubCard;
	onClick: () => void;
	selected?: boolean;
}) {
	return (
		<div
			className={`rounded-box shadow card ${
				props.selected ? 'selected' : null
			}`}
			onClick={props.onClick}>
			<div
				className='top-color-area'
				style={{
					backgroundColor: IndustryToColor(props.card.industry),
				}}>
				<div className='step'>
					{Industry[props.card.industry]} {Step[props.card.step]}
				</div>
			</div>
			<h1
				style={{
					fontSize: 50,
				}}>
				{props.card.emoji}
			</h1>
			<p className='normal-and-bold no-padding'>
				{props.card.displayName}
			</p>
			<p className='normal-and-bold no-padding'>${props.card.value}</p>
			<p
				style={{ color: props.card.baseIncome >= 0 ? 'green' : 'red' }}
				className='normal-and-bold no-padding'>
				{props.card.baseIncome >= 0 ? '+' : '-'}${props.card.baseIncome}
			</p>
		</div>
	);
}
