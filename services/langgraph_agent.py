from langgraph.graph import StateGraph

def router(state):
    text = state["input"].lower()
    if state.get("interaction_id"):
        return "edit"
    return "log"


def build_agent():

    from tools.log_interaction_tool import log_interaction_tool
    from tools.edit_interaction_tool import edit_interaction_tool

    graph = StateGraph(dict)

    graph.add_node("log", log_interaction_tool)
    graph.add_node("edit", edit_interaction_tool)

    graph.set_conditional_entry_point(router)

    graph.add_edge("log", "__end__")
    graph.add_edge("edit", "__end__")

    return graph.compile()



