export enum CardRarity {
	COMMON,
	RARE,
	EPIC,
	LEGENDARY,
}

export enum HubType {
	AIRPORT,
	SEAPORT,
	WAREHOUSE,
	DISTRIBUTION,
}

export enum Step {
	SUPPLIER,
	MANUFACTURER,
	DISTRIBUTER,
	RETAILER,
}

export enum CardType {
	HUB,
	ACTION,
}

export interface CardFlag {
	effector: {
		playerId: number;
		cardId: number;
	};
	isTemporary: boolean;
	turnsLeft?: number;
	incomeBoost: number;
	isStolen: boolean;
}

export interface CardInstance extends CardInstanceData {
	card: Card;
}

export interface IncomeModifier {
	incomeBoost: number;
	isAdditive: boolean;
	isPermanent: number;
	modType: number;
	turnsLeft: number;
}

export interface CardInstanceData {
	instanceId: number;
	cardId: number;
	effectiveIncome: number;
	modifiers: {
		hub: {};
		income: IncomeModifier[];
		owner: {};
	};
}

export interface Card {
	instanceId?: number;
	id: number;
	emoji: string;
	displayName: string;
	description: string;
	cardType: CardType;
	rarity: CardRarity;
}

export interface HubCard extends Card {
	value: number;
	baseIncome: number; //$ per turn generated by the card
	hubType: HubType;
}

export interface ActionCard extends Card {
	isTargetSelfCard: boolean;
	isTargetPlayer: boolean;
	isTargetCard: boolean;
}

export interface UserData {
	_id: number;
	profile?: {
		username?: string;
		displayName?: string;
	};
	game?: UserGameData;
}

export interface UserGameData {
	id: string;
	inventory?: {
		cardInstances: CardInstance[];
	};
	stats?: {
		cash: number;
		netWorth: number;
		turnIncome: number;
	};
}

export enum LogType {
	ACTION_LOG,
	DRAW_LOG,
	INCOME_LOG,
}

export interface Log {
	logType: LogType;
	userId: number;
	time: number;
}

export interface ActionLog extends Log {
	cardId: number;
	instanceId?: number;
	targetId?: number;
	targetCardId?: number;
	selfCardId?: number;
}

export interface DrawLog extends Log {
	instanceId?: number;
	cardId: number;
}

export interface IncomeLog extends Log {
	turnIncome: number;
}
