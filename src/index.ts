export const ValidateId = (id: number): boolean => {
	return false;
};

export const ValidateName = (name: string): boolean => {
	return /^[A-Za-z\s]*$/.test(name);
};
