import React from 'react';
import {Link} from 'react-router';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

class NewPost extends React.Component {
    static contextTypes = {
      router: React.PropTypes.object
    };

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(props){
        this.props.createPost(props).then(() => { this.context.router.push('/')});
    };

    render() {
        const {fields: {title, categories, content}, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <h3 className="">Nouveau blog</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Titre</label>
                    <input type="text" className="form-control form-control-danger" {...title}/>
                    <div className="text-help text-danger small take-place">{title.touched ? title.error : ''}</div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Catégories</label>
                    <input type="text" className="form-control form-control-danger" {...categories}/>
                    <div className="text-help text-danger small take-place">{categories.touched ? categories.error : ''}</div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Message</label>
                    <textarea className="form-control form-control-danger" {...content}/>
                    <div className="form-control-feedback small take-place">{content.touched ? content.error : ''}</div>
                </div>
                <button type="submit" className="btn btn-outline-primary">Terminé</button>
                <Link to="/" className="btn btn-outline-secondary">Annulé</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) errors.title = "Titre manquant";
    if (!values.categories) errors.categories = "Categories manquantes";
    if (!values.content) errors.content = "Message manquant";

    return errors;
}

const config = {
    form: 'NewPostForm',
    fields: ['title', 'categories', 'content'],
    validate
};

export default reduxForm(config, null, {createPost})(NewPost);