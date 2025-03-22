exports.validateRequiredFields = (body, requiredFields) => {
    const missingFields = requiredFields.filter(field => body[field] === undefined);
    return missingFields.length > 0 ? missingFields : null;
};