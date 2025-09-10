<h1>Lista de Agentes do Valorant:</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {agents && agents.length > 0 ? (
                    agents.map(agent => (
                        <div key={agent.uuid} style={{ 
                            border: '1px solid #ddd', 
                            padding: '15px', 
                            borderRadius: '10px',
                            textAlign: 'center',
                            backgroundColor: '#f9f9f9'
                        }}>
                            <h3>{agent.displayName}</h3>
                            
                            {/* Imagem do agente - várias opções possíveis */}
                            {agent.displayIcon && (
                                <div>
                                    <p><strong>Ícone:</strong></p>
                                    <img 
                                        src={agent.displayIcon} 
                                        alt={`${agent.displayName} icon`}
                                        style={{ width: '64px', height: '64px' }}
                                    />
                                </div>
                            )}
                            
                            {agent.fullPortrait && (
                                <div>
                                    <p><strong>Portrait Completo:</strong></p>
                                    <img 
                                        src={agent.fullPortrait} 
                                        alt={`${agent.displayName} portrait`}
                                        style={{ width: '200px', height: 'auto' }}
                                    />
                                </div>
                            )}
                            
                            {agent.bustPortrait && (
                                <div>
                                    <p><strong>Bust Portrait:</strong></p>
                                    <img 
                                        src={agent.bustPortrait} 
                                        alt={`${agent.displayName} bust`}
                                        style={{ width: '150px', height: 'auto' }}
                                    />
                                </div>
                            )}
                            
                            {/* Informações básicas */}
                            <p><strong>UUID:</strong> {agent.uuid}</p>
                            {agent.role && <p><strong>Função:</strong> {agent.role.displayName}</p>}
                            {agent.description && <p><strong>Descrição:</strong> {agent.description}</p>}
                            
                            {/* Habilidades */}
                            {agent.abilities && (
                                <div>
                                    <p><strong>Habilidades:</strong></p>
                                    {agent.abilities.map((ability, index) => (
                                        <div key={index} style={{ margin: '5px 0' }}>
                                            <strong>{ability.displayName}:</strong> {ability.description}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Nenhum agente encontrado.</p>
                )}
            </div>