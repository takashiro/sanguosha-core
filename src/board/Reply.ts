export enum ReplyType {
	Default,

	Confirm,
	Cancel,
}

interface Reply<DataType> {
	type?: ReplyType;
	data?: DataType;
}

export default Reply;
