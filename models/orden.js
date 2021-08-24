'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.cliente)
    }
  };
  orden.init({
    fecha: DataTypes.DATE,
    clienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orden',
    tableName: "ordenes"
  });
  return orden;
};
