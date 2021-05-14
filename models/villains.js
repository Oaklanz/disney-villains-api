 const villains = (connection, Sequalize) => {
        return connection.define('villains', {
        name: {type: Sequalize.STRING}
        movie:{type: Sequalize.STRING}
        slug: {type: Sequalize.STRING}

        },{ paranoid: true })
    }

module.exports = villains