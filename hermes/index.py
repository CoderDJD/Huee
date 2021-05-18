from ariadne import QueryType, gql, make_executable_schema
from ariadne.asgi import GraphQL
type_defs = gql("""
    type Query {
        hello: String!
    }
""")
query = QueryType()
@query.field("hello")
def resolve_hello(_, info):
    request = info.context["request"]
    user_agent = request.headers.get("user-agent", "guest")
    return "Hello, %s!" % user_agent
schema = make_executable_schema(type_defs, query)
app = GraphQL(schema, debug=True)