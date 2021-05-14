 const villians = (connection, Sequalize) => {
        return connection.define('villians', {
        name: {type: Sequalize.STRING}
        movie:{type: Sequalize.STRING}
        slug: {type: Sequalize.STRING}

        },{ paranoid: true })
    }

module.exports = villians